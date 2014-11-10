# Federal Website Template


#### Requirements:

Browser support for IE 8 +
Mobile-first responsive

#### Prereqs

##### Software Packages
1. Git
2. Ruby 2+
3. NodeJS

##### Ruby Gems:
1. Jekyll (and dependancies)
 * https://github.com/jekyll/jekyll

##### Node Packages:
1. Bower
2. Grunt

#### Setup

1. Clone Repo
1. ```cd federal-website-template```
1. run ```npm install``` (this will install bower, grunt and grunt utilities)
1. run ```bower install```
1. Optional: install the twitter bootstrap depenancies (if you need to compile bootstrap from source):
 1. ```cd bower-components/bootstrap```
 1. ```npm install```


## Build and run

Compile LESS, copy assets:

``` grunt ```

When working locally use:
```jekyll serve --baseurl ''```
 so that you can view everything at localhost:4000



 ## Links

 https://github.com/github/pages-gem

 https://rtcamp.com/tutorials/nodejs/node-js-npm-install-ubuntu/

https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm