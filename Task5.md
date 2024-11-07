# Task 5: Linux

## To change file permissions so only the owner can read and write to it:

```bash
chmod 600 filename
```

This command sets:

- Read and write permissions for the owner (6)
- No permissions for group (0)
- No permissions for others (0)

You can verify the change with:

```bash
ls -l filename
# Output should show: -rw-------
```

## Additional Linux Knowledge Demonstration

### 1. File System Navigation

```bash
pwd                   # Show current directory
ls -la                # List all files with details
cd /path/to/dir       # Change directory
cd ..                 # Move up one level
find / -name file.txt # Find a file
```

### 2. File Operations

```bash
touch file.txt       # Create empty file
cp source dest       # Copy file
mv source dest       # Move/rename file
rm file.txt          # Remove file
cat file.txt         # View file contents
```

### 3. Basic Networking Commands

```bash
ping hostname        # Test connectivity
ifconfig/ip addr     # Show network interfaces
netstat -tuln        # Show active ports
wget url             # Download files
ssh user@host        # Remote connection
```

These commands demonstrate my understanding of:

- File system navigation
- Permission management
- Basic file operations
- Network connectivity
- System information retrieval
