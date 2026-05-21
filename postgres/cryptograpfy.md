Cryptography is the science of securing information. It comes in several **main types**, each designed for different purposes like confidentiality, integrity, authentication, and non-repudiation. Here’s a clear breakdown:

---

# 🔐 1. Symmetric Cryptography (Secret-Key)

**How it works:**
The same key is used for both encryption and decryption.

**Key idea:** Fast, but requires secure key sharing.

**Examples:**

- AES
- DES

**Use cases:**

- File encryption
- Disk encryption
- VPNs

---

# 🔑 2. Asymmetric Cryptography (Public-Key)

**How it works:**
Uses a **pair of keys**:

- Public key (shared openly)
- Private key (kept secret)

**Key idea:** Solves key distribution problem.

**Examples:**

- RSA
- Elliptic Curve Cryptography

**Use cases:**

- Secure communication (HTTPS)
- Digital signatures
- Email encryption

---

# 🧾 3. Hash Functions

**How it works:**
Converts data into a fixed-size string (hash).
**One-way function** → cannot be reversed.

**Examples:**

- SHA-256
- MD5 (now insecure)

**Use cases:**

- Password storage
- Data integrity checks
- Blockchain

---

# ✍️ 4. Digital Signatures

**How it works:**
Uses asymmetric cryptography to verify:

- Sender identity
- Message integrity

**Key idea:** Authentication + non-repudiation.

**Examples:**

- DSA
- ECDSA

**Use cases:**

- Software distribution
- Legal documents
- Cryptocurrencies

---

# 🔄 5. Hybrid Cryptography

**How it works:**
Combines:

- Asymmetric (for key exchange)
- Symmetric (for fast data encryption)

**Example:**

- TLS

**Use cases:**

- HTTPS websites
- Secure messaging apps

---

# 🧠 6. Modern / Advanced Cryptography Types

These are more specialized:

### • Homomorphic Encryption

- Perform computations on encrypted data without decrypting it.

### • Quantum Cryptography

- Uses quantum mechanics (e.g., quantum key distribution)

### • Zero-Knowledge Proofs

- Prove something is true without revealing the actual data

---

# 📊 Quick Summary

| Type               | Key Feature           | Speed     | Security Use      |
| ------------------ | --------------------- | --------- | ----------------- |
| Symmetric          | One shared key        | Fast      | Bulk encryption   |
| Asymmetric         | Public + private keys | Slower    | Key exchange      |
| Hashing            | One-way               | Fast      | Integrity         |
| Digital Signatures | Authentication        | Medium    | Identity proof    |
| Hybrid             | Combines both         | Efficient | Internet security |

---

If you want, I can explain **which cryptography type is used in WhatsApp, Bitcoin, or banking systems**—those examples make it much easier to understand.
