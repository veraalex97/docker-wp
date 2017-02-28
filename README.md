## Develop in WordPress without bloating your local environment.
### It's time for some Docker.

<h3>Let's get you setup</h3>

<p>Let's download Docker</p>
  Mac Version 
  ```bash
  https://download.docker.com/mac/stable/Docker.dmg
  ```
  Windows Version 
  ```bash
  https://download.docker.com/win/stable/InstallDocker.msi
  ```

<p>For Linux (Ubuntu)</p>
<p>Remember to not include the "$"</p>  

Step 1: Dependencies to set up the repository

```bash
$ sudo apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
```

Step 2: Add Dockers GPG Key

```bash
$ curl -fsSL https://apt.dockerproject.org/gpg | sudo apt-key add -
```

/ Verify that Key

```bash
$ apt-key fingerprint 58118E89F3A912897C070ADBF76221572C52609D

  pub   4096R/2C52609D 2015-07-14
        Key fingerprint = 5811 8E89 F3A9 1289 7C07  0ADB F762 2157 2C52 609D
  uid                  Docker Release Tool (releasedocker) <docker@docker.com>
```

Step 3: Install Repository

```bash
$ sudo add-apt-repository \
       "deb https://apt.dockerproject.org/repo/ \
       ubuntu-$(lsb_release -cs) \
       main"
```

Step 4: Install

```bash
$ sudo apt-get update && sudo apt-get -y install docker-engine
``` 

<p>Now let's download NodeJS</p>

For Mac and Windows
```bash
  https://nodejs.org/en/
```

For Linux (Ubuntu)
```bash
$ sudo apt-get install update && sudo apt-get install nodejs && sudo apt-get install npm
```

<h4>Now let's get to the fun part</h4>

Let's install some of our dependencies (don't get confused, we're going to be doing docker and node commands at once)

Let's install the node depencies first:

GulpJS (if on Linux, sudo)

```bash
$ npm install -g gulp
```

Browser-Sync

```bash
$ npm install -g browser-sync
```

Now, once you download this repo and are in the folder run the following:

This will pull (install) the latest images on the services in the docker-compose.yml file
```bash
$ docker-compose pull
```

<h3>Now let's run this damn thing</h3>

