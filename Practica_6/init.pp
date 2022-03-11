class mymodule {

    file { '/home/marco':
        ensure => directory,
        owner => 'marco',
    }

    file { '/home/marco/docker-compose.yml':
        mode => '0644',
        owner => 'marco',
        source => 'puppet:///modules/mymodule/docker-compose.yml',
    }
		
}