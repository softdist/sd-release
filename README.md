<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD012 -->
# @softdist/docker

The @softdist jsr.io scope is used to package the Lyns Docker Client!

* Based on @rainypixel but tailored for creating and attaching to containers
* Also designed to run distrolss containers as scripted actions.

# **Docker Bake**

## GitHub packager

### Package

* Single Dockerfile for all builds
* Deno check
  * Mocks
  * Unit tests
  * Integration Tests
* Deno compile targets loop:
  * For each platform:
    * Compile all binaries and store them in a single ‘installer’:
    * Tar up all the installers for the ‘all platforms’
    * Install.ts
      * \<os\>.\<platform\>/install
      * revise so this install actually contains the compiled binary files for all the below scripts embedded in a key/value store so these files can be exported to the user’s computer for the os/platform this install runs under.
      * Cosign this single binary
      * Once the files are extracted to the current $binPath ‘configure is called’
      * All child files must be compiled first:
    * Configure.ts
      * \<os\>.\<platform\>/configure
    * Run.ts
      * \<os>.\<platform>/install
    * Extricate.ts
      * \<os>.\<platform>/install
    * Daemon.ts
    * Compose.ts

### Supported Platforms

* darwin
  * amd64
  * arm64
* linux
  * amd64
  * arm64
* windows
  * amd64
  * arm64

## GitHub Releaser

### Mount finished tar file

### Mount finished release installers

### For each file

* Publish them within a versioned directory:

### Release semantic version

* gh release create v1.2.3 -F ./release-notes.md '/bin/v/1.2.3/asset.zip#All platforms'
* gh release create v1.2.3 -F ./release-notes.md '/bin/v/1.2.3/darwin-arm64#Darwin-ARM64.zip

## Brew Tap Install

### brew install softdist/client

* Ruby detects platform
  * Fetch latest version tag
  * Fetch latest release binary:
    * Tag
    * OS
    * Platform
  * Validate checksum & signing
  * Run install
    * Runs configure
* Runner
  * Initialize:
    * Get latest version
    * Install if newer
  * Object:
    * CommandCLI
      * Child containers
        *Create
        * Start
        * Attach full duplex
      * Parent containers
        *Create
        * Start
        * Attach full duplex
      * Configure local environment
        *Fish
        * Nushell

