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
/venv
/.vagrant
*.log
__pycache__
/public
/node_modules
```

Install Flask and freeze requirements:

```
pip install Flask gunicorn
pip freeze > requirements.txt
```

Remove the `pkg-resources` line.

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
git push heroku master
```

Visit the site at https://flask-psql-react.herokuapp.com.

Add `package.json`:

```
{
  "name": "flask-psql-react",
  "version": "1.0.0"
}
```

Install node.js:

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs
```

Add frontend dependencies:

```
npm install --save webpack webpack-dev-server babel-cli babel-loader @babel/preset-env
```

Add `webpack.config.js`, `.env`, `templates/index.html` and modify `http.py`:

```
return render_template('index.html', publicPath=os.environ.get('PUBLIC_PATH', '/public'))
```

Add scripts to `package.json`:

```
"scripts": {
  "dev": "./node_modules/.bin/webpack-dev-server",
  "heroku-postbuild": "./node_modules/.bin/webpack"
},
```

Add nodejs buildpack:

```
heroku buildpacks:add --index 1 heroku/nodejs
```

Install postgres:

```
sudo apt-get install postgresql
```

Test connectivity with Heroku:

```
heroku pg:psql
```
