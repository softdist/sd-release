variable "REPO" {
  default = "lynsei"
}
variable "LYNS_INSTALL_BUILD_NUM" {
  default = "$LYNS_INSTALL_BUILD_NUM"
}
variable "LYNS_INSTALL_VERSION" {
  default = "$LYNS_INSTALL_VERSION"
}
variable "DENO_CERT" {
  default = "/etc/certs/trusted_certs.pem"
}
variable "GH_TOKEN" {
  default = "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"
  sensitive = true
}
variable "TRUSTED_CERT" {
  default = "$TRUSTED_CERT"
}


target "bin-arm" {
  context = "."
  secret = [
    "type=env,id=DENO_CERT",
    "type=env,id=TRUSTED_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
    denocert = "${DENO_CERT}"
  }
  dockerfile = "Dockerfile.package"
  tags = ["${REPO}/bin:latest"]
  no-cache = true
  platforms = ["linux/arm64"]
}

target "bin-amd" {
  context = "."
  secret = [
    "type=env,id=DENO_CERT",
    "type=env,id=TRUSTED_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
    denocert = "${DENO_CERT}"
  }
  dockerfile = "Dockerfile.package"
  tags = ["${REPO}/bin:latest"]
  no-cache = true
  platforms = ["linux/amd64"]
}

target "release" {
  context = "."
  secret = [
    "type=env,id=TRUSTED_CERT",
    "type=env,id=DENO_CERT"
  ]
  args = {
    buildno = "${LYNS_INSTALL_BUILD_NUM}"
    denocert = "${DENO_CERT}"
  }
  dockerfile = "Dockerfile.release"
  tags = ["${REPO}/bin.release:latest"]
  no-cache = true
  platforms = ["linux/arm64"]
}
