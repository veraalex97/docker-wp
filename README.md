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

<h3>Step 1:</h3> Dependencies to set up the repository

`
$ sudo apt-get install -y --no-install-recommends \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
`

<h3>Step 2:</h3> Add Dockers GPG Key

```bash
$ curl -fsSL https://apt.dockerproject.org/gpg | sudo apt-key add -
```

Verify that Key

```bash
$ apt-key fingerprint 58118E89F3A912897C070ADBF76221572C52609D

  pub   4096R/2C52609D 2015-07-14
        Key fingerprint = 5811 8E89 F3A9 1289 7C07  0ADB F762 2157 2C52 609D
  uid                  Docker Release Tool (releasedocker) <docker@docker.com>
```

<h3>Step 3:</h3> Install Repository

```bash
$ sudo add-apt-repository \
       "deb https://apt.dockerproject.org/repo/ \
       ubuntu-$(lsb_release -cs) \
       main"
```

<h3>Step 4:</h3> Install

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

<h3>Let's install the node depencies first:</h3>

<h3>GulpJS (if on Linux, sudo)</h3>

```bash
$ npm install -g gulp
```

<h3>Browser-Sync</h3>

```bash
$ npm install -g browser-sync
```

Now, once you download this repo and are in the folder run the following:

This will pull (install) the latest images for the services specified in the docker-compose.yml file

```bash
$ docker-compose pull
```

<b>Lastly, run the wp-download.sh script file. This will download the latest wp to your folder.</b>

```bash
$ sh ./wp-download.sh
```

<h3>Now let's run this damn thing</h3>

This part will be pretty straight forward,
Let's first run our containers which hold our services
This will take a minute on the first run, please be patient.

```bash
$ docker-compose up
```

Now browse to `localhost:9999` for the wordpress installation.
You can also visit `localhost:9001` to check out phpmyadmin.

But, that's not all.
Our services are running. Cool.. but we can do cooler things with our friend NodeJS and the tasks I've written.

You can close the browser if you'd like.

<p>The GulpJS tasks let's you and your team export and import the database at will and work on plugins and themes without having to refresh the browser</p>

While docker is still running, let's run the browser-sync server.

This will run a hot-reloading server and open a browser for you automatically on your new WordPress install.
```bash
$ gulp serve
```

You can now visit `localhost:3000` if a new browser wasn't opened automatically.

<br>

Pretty cool eh?

The last useful thing we can do now is export and import the database freely without using plugins or doing it manually through phpmyadmin.

Let's export
```bash
$ gulp export
```

Easy right?
Now, let's import.

```bash
$ gulp import
```

Now, you and your team can work on the same WordPress project.
All you have to do is export before pushing the docker container to GitHub or your preferred versioning system. (I don't judge, I sometimes use mercurial too).

<h2>to-do</h2>
