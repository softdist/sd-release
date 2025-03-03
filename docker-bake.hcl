variable "REPO" {
  default = "lynsei"
}
variable "LYNS_INSTALL_BUILD_NUM" {
  default = "$LYNS_INSTALL_BUILD_NUM"
}
variable "TRUSTED_CERT" {
  default = "$TRUSTED_CERT"
}


target "bin-arm" {
  context = "."
  secret = [
    "type=env,id=TRUSTED_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
  }
  dockerfile = "Dockerfile.package"
  tags = ["${REPO}/bin:latest"]
  no-cache = true
  platforms = ["linux/arm64"]
}

target "bin-amd" {
  context = "."
  secret = [
    "type=env,id=TRUSTED_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
  }
  dockerfile = "Dockerfile.package"
  tags = ["${REPO}/bin:latest"]
  no-cache = true
  platforms = ["linux/amd64"]
}

target "release" {
  context = "."
  secret = [
    "type=env,id=TRUSTED_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
  }
  dockerfile = "Dockerfile.release"
  tags = ["${REPO}/bin.release:latest"]
  no-cache = true
  platforms = ["linux/arm64"]
}
