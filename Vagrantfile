Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.provider "virtualbox"
  config.vm.synced_folder ".", "/vagrant"
  config.vm.network "private_network", ip: "192.168.14.2"
end
