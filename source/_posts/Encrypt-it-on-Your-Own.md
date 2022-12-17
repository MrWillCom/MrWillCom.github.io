---
title: Encrypt it on Your Own!
date: 2021-08-14
cover_image: /img/000023.png
cover_image_alt: The logo of RSA CLI
categories: Essay
tags:
  - rsa
  - cli
  - security
---

Recently, I've written a CLI for RSA encryption and decryption - RSA CLI.

RSA CLI is based on Node.js, works perfectly with all the desktop platforms.

If you have Node.js environment on your device, with the help of npm, you can install it by running a single line of command:

```sh
$ npm install -g rsa-cli
```

Yarn is also supported:

```sh
$ yarn global add rsa-cli
```

Without Node.js environment, it's still easy to install. Just download the executable for your device in [GitHub Releases](https://github.com/MrWillCom/rsa-cli/releases) and execute it.

---

Now start encrypting:

## 0x00

```sh
$ rsa generate [keyName]
```

Run the command above to generate a new key pair. Modulus length is 2048 by default, and if you want to change it, use `-l` flag:

```sh
$ rsa generate [keyName] -l 4096
```

Remember `[keyName]`, it's needed for next steps.

## 0x01

Get your public key by running:

```sh
$ rsa get [keyName]
Public key of key pair '[keyName]':
-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAv1n2RwSVDyfd7wsWo5g9Q3bG2uTU4eLxFFgX4coUSRYQKjVXH2zp
8QUmaRghF3qTumlWzCY6WJUvYQl6alu1/VrLOUCeQCat74nLxlIWI44GCB7vhGrC
ktqTpaVmFxa4aOAXT7WLGA15wcaW7hS4mdgbwehx4Bqisk+SjZqJ017ASBFMz02m
RNpKjQoJgRQWdDsr/VDNEKbAYl2ghVlTT9yidiCBJlLISkhTvLVmMzd2ULPzoa9F
8rXxpWJ/4j+rKJKpOaGJIKYCLTgZOXHLHZE7vPxBNK8L/nAV4XDI0S+QSwqVFR0A
uhXiHquN1Ae7wiyljqbei3vZylIYAaIkywIDAQAB
-----END RSA PUBLIC KEY-----
```

Copy `-----BEGIN RSA ...... END RSA PUBLIC KEY-----` and save it to a file, then send this file to your friend.

Your friend should also install RSA CLI, he/she need to download it and import it:

```sh
$ rsa import [yourFriendsKeyName] --public [path-to-the-file]
```

The next step is to encrypt a message:

```sh
$ rsa encrypt [yourFriendsKeyName] '[message]'
```

Finally, tell your friend to copy the output and send it to you.

## 0x02

After receiving the encrypted message from your friend, you can now decrypt it:

```sh
$ rsa decrypt [keyName] '[the-encrypted-message-from-your-friend]'
```

Done! you got the decrypted message from the output.

---

I think privacy should be in your control. You should not trust anyone who can't proof your privacy is encrypted and private. Trust yourself. RSA CLI is an easy way to encrypt and decrypt on your own, which means you can really know your privacy is encrypted. Without private key, no one can decrypt your messages.

But why trusting RSA CLI? Because it's [fully open source](https://github.com/MrWillCom/rsa-cli).
