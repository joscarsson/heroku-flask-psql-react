Install vagrant and VirtualBox.

```
vagrant box add ubuntu/xenial64
```

Vagrant file contents:

```
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.provider "virtualbox"
  config.vm.synced_folder ".", "/vagrant"
end
```

Start the virtual machine:

```
vagrant up
vagrant ssh
```

On the machine, install python:

```
sudo add-apt-repository ppa:fkrull/deadsnakes
sudo apt-get update
sudo apt-get install python3.6
sudo apt-get install virtualenv
```

Configure virtualenv:

```
cd /vagrant
virtualenv --python=python3.6 venv
source venv/bin/activate
```

Add `.gitignore`:

```
venv
.vagrant
*.log
__pycache__
```

Install Flask and freeze requirements:

```
pip install Flask gunicorn
pip freeze > requirements.txt
```

Add first simple Python app in `<name>/http.py`:

```
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Yes, it works! Amazing! Hej Hannah!'
```

Add `Procfile`:

```
web: gunicorn flask-psql-react.http:app
```

Install Heroku toolbelt.

```
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

Run locally with:

```
heroku local
```

Commit!

```
git init
git add .
git commit -m "Working http server"
```

Login to Heroku:

```
heroku auth:login
```

Deploy app to Heroku:

```
heroku git:remote
```

Install postgres:

```
sudo apt-get install postgresql
```

Test connectivity with Heroku:

```
heroku pg:psql
```
