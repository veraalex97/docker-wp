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
