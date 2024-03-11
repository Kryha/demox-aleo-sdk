// Test data created from a run of SnarkOS local network

// A random seed used to generate the private key
const seed = new Uint8Array([94, 91, 52, 251, 240, 230, 226, 35, 117, 253, 224, 210, 175, 13, 205, 120, 155, 214, 7, 169, 66, 62, 206, 50, 188, 40, 29, 122, 40, 250, 54, 18]);
// UTF-8 bytes of the message "hello world"
const message = Uint8Array.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]);
// Private key string derived from the seed
const beaconPrivateKeyString = "APrivateKey1zkp8CZNn3yeCseEtxuVPbDCwSyhGW6yZKUYKfgXmcpoGPWH"
const fundedPrivateKeyString = "APrivateKey1zkp3dQx4WASWYQVWKkq14v3RoQDfY2kbLssUj7iifi1VUQ6"
const fundedAddressString = "aleo184vuwr5u7u0ha5f5k44067dd2uaqewxx6pe5ltha5pv99wvhfqxqv339h4"

const privateKeyString = "APrivateKey1zkpJkyYRGYtkeHDaFfwsKtUJzia7csiWhfBWPXWhXJzy9Ls";
const viewKeyString = "AViewKey1ccEt8A2Ryva5rxnKcAbn7wgTaTsb79tzkKHFpeKsm9NX";
const addressString = "aleo1j7qxyunfldj2lp8hsvy7mw5k8zaqgjfyr72x2gh3x4ewgae8v5gscf5jh3";

// View key string derived from the private key
const beaconViewKeyString = "AViewKey1mSnpFFC8Mj4fXbK5YiWgZ3mjiV8CxA79bYNa8ymUpTrw"
// Address string derived from the view key
const beaconAddressString = "aleo1rhgdu77hgyqd3xjj8ucu3jj9r2krwz6mnzyd80gncr5fxcwlh5rsvzp9px"
// Ciphertext of a record generated by the private key above
const recordCiphertextString = "record1qyqsqpe2szk2wwwq56akkwx586hkndl3r8vzdwve32lm7elvphh37rsyqyxx66trwfhkxun9v35hguerqqpqzqrtjzeu6vah9x2me2exkgege824sd8x2379scspmrmtvczs0d93qttl7y92ga0k0rsexu409hu3vlehe3yxjhmey3frh2z5pxm5cmxsv4un97q";
// Plaintext record corresponding to the ciphertext generated by the private key
const recordPlaintextString = "{\n  owner: aleo1j7qxyunfldj2lp8hsvy7mw5k8zaqgjfyr72x2gh3x4ewgae8v5gscf5jh3.private,\n  microcredits: 1500000000000000u64.private,\n  _nonce: 3077450429259593211617823051143573281856129402760267155982965992208217472983group.public\n}";
// Cipher text of a record generated by a different private key
const foreignCiphertextString = "record1qyqsq553yxz8ylwqyqfmcfmwz03x6xsxf2h2kypcwhykzgm50ut4susyqyxx66trwfhkxun9v35hguerqqpqzqyjt8kxnp28v83t460knvp0dq86a3r3dyve945u0xqeksq323paqtegslprdc5zypksrja7rmctx90jnpeq5sqkwlfct7ygy990a5pqs7y5pt0"
// View key string of a different private key
const foreignViewKeyString = "AViewKey1ghtvuJQQzQ31xSiVh6X1PK8biEVhQBygRGV4KdYmq4JT"
const helloProgramId = 'hellothere.aleo';
const helloProgramMainFunction = 'hello';
const helloProgram = 'program ' + helloProgramId + ';\n\nfunction ' + helloProgramMainFunction + ':\n    input r0 as u32.public;\n    input r1 as u32.private;\n    add r0 r1 into r2;\n    output r2 as u32.private;\n';
const recordStatePath = "path1qxuhaurx4jsylq34z6vwnufa8m2s3sgpz8w2cp6myj5hps48pd3sp59sqgqqqqqqqzqslytl8jkafzlmzy294psjce649x64scwxdq2kys70y7kh5fxqwgzc6f9lg9ax0mr52p6d42c2lax9m4e6fnxdpde3722sjrlv77ssn7lh9yvtdfwxhpkzhrfscnxw7h36t9j767w34u8rxmdw0y5vyurdtakhtj7tu69nx6yzdv3p0ssr0ursrzgfkqftwjxg6qpj5pg96rkt4vsduph46p9e7nzkmfcn6g2vlc2sz80wr8ct37zdvqmhg4jjpdzfh607804rqksqd40zvn6shrauxv775zgcpd6ecl6gee9kjqfs5hevpjpzkv94md4arwgynpy6wr4k3txhap0n93y3fl3edwgul0gyn268hrlylqmyqvv8rse40tytnk9atrjx9mlnhp6mrqhd45u99s8gsjw899kz6yhktejwj6snlp7r38kwdmlxczr7m0sn46tmjjndqzn7zmw23jd0x2vwf4x3z7dt642zwweq597dlzaxqx2qg6e89jgmq8fq9pwpy6uqt6prke4v66u39aqz7qewnh2a8er0y78m2dyayr8sdsjpdcdvc78f95wdvapn8072h2jqtj6zvkc52tavlkqfmvfxvpq87h39ajdx4c0sfckm05aqg9mfdykse2cf0vsr0regrp9m9dundvgyat0rcg3fsex6c0335hs7tafxjgkw7k9mxm7arus94ytv4g5x7y0d0pjs2gzexf9lxt2mwegumamgvfplafglgkm46h5j26cvcacfqmj39p7x28pfdma2dp0jyet5nz4pr9j0yf6f6l72kzexsd7kp82s6z6rnk6l2yg7xpeyc3dy907wefjn5w35prnacapd4acn20qeldgwwmuev0d8t6tz02x2kv8qg9sxhakx6fmw5rd35fda735pchuct5gcg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyd7cpzdqmmk8kqx9mamt3823llmpxe7ucl5xrh99eey6uttcvcq8jq456p3k5rd8qjdz5kdd0ps8egwka9h6aj3gtg3pzp8xv56tlsq88fastmq94wcfwr90jzg07xyyvade4x90g9zvhyrxhm93vkkagpcqsqqqqqqqqqqz4rs96qtywgyfgwa3uugkzhamnpcdp35u0usvts0n6r9upzg62qxdvc5crng8rccmx8g5mrggcsljgn0mm50uff23ltnvydjfxv9fq8c3nfvfpd5e9zfzseckwstayj9808fxvacfe5wnjfync9gxl3xsrqy63cndhvvngjkg2n5klutrqs04thqmrvt6jmdy49ujdseu4ejwqvqgqqqqqqqqqqrjf3j0jre2q0dfv994v6k9e3apt4nxz5cke8a03y7cvqvk4ay7slq7jqun026crdwt8z20greysgvn3ylv6yj3g9qv3hclavf8gk6sqss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqg7rszp4encvm274xvqyvz3nrceue6lghh5z23yunq6ulqeqghhcgqqqqqqqqqqqqq0rnqyt54zawe3s0z04lj64qv2sctu9xdqm9sgevv2xzajdfpaszss2eafg236dqunyghdd0p7pttvey0765ry52vccqmlp859j9tgzgg9v7559gaxswfjytkkhslq44kvj8ld2pj29xvvqdlsn6zez45pyyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqgqgqqp6n2y4sgn45qchvjz0y9vt02yqzzhutntc5udmvmfjdvjvnnulqlnzx34dqfdxukrz5td8ewq5tm4dkylpa5syj6c3x7zem2l4dagg9qmhsh27kayvt7vmaht8qpxf0g89p4lh707gzf789gtdkxg8e5qpqyqqqqqqqqqqqwrrsyh67ntxpeax5m7m39lh6783j5m3g8uugflxc7gs39jnety9kje9ndg9yua6vgnysjnnfx4ug38pam80cped3p5al3uehdfsgjruyzk022z5wng8yez9mttc0s26mxfrlk4qe9znxxqxlcfapv326qjzpt849p28f5rjv3za44u8c9ddny3lm2svj3fnrqr0uy7skg4dqfpq4n6js4r56pexg3w667ruzkkejgla4gxfg5e3sph7z0gty2ksyqypq8eq9ac7z7vuxhqwqd35zwln8ql73uwzw8wutp8343gh2n7arc5spz3duaf";
const statePathRecord = "{ owner: aleo1n43sa2tl5zu28nma3uklpq77gg67rsvg6m460gkzref4ps9wlvgqdvlemw.private, microcredits: 1000000u64.private, _nonce: 5254014383534489106096858537900997326995709579576253332703268634863784343217group.public }";
const stateRoot = "sr1h9l0qe4v5p8cydgknr5lz0f765yvzqg3mjkqwkey49cv9fctvvqqmrrj3m";
const statePathRecordOwnerPrivateKey = "APrivateKey1zkpAZAjaJJvPS7EJ7zvk5fb3QcZDCDxMSHSN5ap7ep4FAD7";

export { addressString, beaconAddressString, beaconPrivateKeyString, beaconViewKeyString, foreignCiphertextString, foreignViewKeyString, fundedAddressString, fundedPrivateKeyString, helloProgram, helloProgramId, helloProgramMainFunction, message, recordCiphertextString, recordPlaintextString, privateKeyString, seed, viewKeyString, recordStatePath, statePathRecord, stateRoot, statePathRecordOwnerPrivateKey };