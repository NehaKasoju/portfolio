# Check if Node.js is installed
$nodeVersion = node -v
$npmVersion = npm -v

if ($nodeVersion -and $npmVersion) {
    Write-Host "Node.js version: $nodeVersion"
    Write-Host "npm version: $npmVersion"
    
    # Install dependencies
    Write-Host "Installing project dependencies..."
    npm install next@latest react@latest react-dom@latest
    npm install framer-motion@latest react-intersection-observer@latest
    npm install -D typescript@latest @types/react@latest @types/node@latest
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npm install -D eslint@latest eslint-config-next@latest
    
    # Initialize Tailwind CSS
    Write-Host "Initializing Tailwind CSS..."
    npx tailwindcss init -p
    
    Write-Host "Dependencies installed successfully!"
    Write-Host "You can now run 'npm run dev' to start the development server."
} else {
    Write-Host "Node.js or npm is not installed. Please install Node.js first."
    Write-Host "You can download it from: https://nodejs.org/"
} 