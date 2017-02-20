starter
=======

This is the starter template edited by Christopher Cheung for an interview. 

Setup
=====

Required Software:

- php (https://secure.php.net/)
- composer (https://getcomposer.org/)
Make sure to set up alias for composer to work on Mac. 
- VirtualBox (https://www.virtualbox.org/)
- Vagrant (https://www.vagrantup.com/)
May need to extend timeout for connecting to VagrantBox, change VagrantConfig. 
- NodeJS (https://nodejs.org)

To Setup:

    > git clone git@github.com:dozr/starter.git
    > cd starter
    > composer up

To Update:
> run 'gulp' to use webpacker to compile js and css


Protip:

You can update your `/etc/hosts` file to add a name to your service:

```
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1  localhost
255.255.255.255  broadcasthost
::1             localhost


192.168.10.10  starter.site.dev
```

Then you can point your browser to http://starter.site.dev
