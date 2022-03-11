include mymodule

exec {'docker_ps':
    command => "/bin/bash -c 'docker ps -a'",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    notify  => Exec['docker_stop'],
}

exec {'docker_stop':
    command => "/bin/bash -c 'docker stop $(docker ps -aq) -f || true'",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
    notify  => Exec['docker_rm'],
}

exec {'docker_rm':
    command => "/bin/bash -c 'docker rm $(docker ps -aq) -f || true'",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
    notify  => Exec['docker_rmi'],
}

exec {'docker_rmi':
    command => "/bin/bash -c 'docker rmi $(docker images -q) || true'",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
    notify  => Exec['docker_compose_pull'],
}

exec {'docker_compose_pull':
    command => "/bin/bash -c 'docker-compose pull'",
    cwd => "/home/marco/",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
    notify  => Exec['docker_compose_up'],
}

exec {'docker_compose_up':
    command => "/bin/bash -c 'docker-compose up -d --no-build'",
    cwd => "/home/marco/",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
    notify  => Exec['rm_flagFile'],
}

exec {'rm_flagFile':
    command => "/bin/bash -c 'rm /home/marco/deployments.txt'",
    onlyif => "/bin/bash -c 'test -e /home/marco/deployments.txt'",
    refreshonly => true,
}