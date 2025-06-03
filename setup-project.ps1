# Verify Node.js installation
Write-Host "Verifying Node.js installation..."
$nodeVersion = node --version
$npmVersion = npm --version

if ($nodeVersion -and $npmVersion) {
    Write-Host "Node.js version: $nodeVersion"
    Write-Host "npm version: $npmVersion"
    
    # Initialize npm project
    Write-Host "Initializing npm project..."
    npm init -y
    
    # Install dependencies
    Write-Host "Installing project dependencies..."
    npm install next@latest react@latest react-dom@latest
    npm install framer-motion gsap locomotive-scroll react-intersection-observer react-use
    npm install three @react-three/fiber @react-three/drei
    npm install -D typescript @types/node @types/react @types/react-dom
    npm install -D tailwindcss postcss autoprefixer
    npm install -D eslint eslint-config-next
    
    # Initialize Tailwind CSS
    Write-Host "Initializing Tailwind CSS..."
    npx tailwindcss init -p
    
    Write-Host "Project setup complete!"
    Write-Host "You can now run 'npm run dev' to start the development server."
} else {
    Write-Host "Error: Node.js or npm not found. Please ensure Node.js is installed correctly."
} 