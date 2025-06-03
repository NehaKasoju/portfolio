@echo off
echo Installing dependencies...
npm install next@latest react@latest react-dom@latest
npm install framer-motion gsap locomotive-scroll react-intersection-observer react-use
npm install three @react-three/fiber @react-three/drei
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D eslint eslint-config-next
echo Dependencies installed successfully! 