/** @type {import('tailwindcss').Config} */

export default {
	
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
	
  ],
  theme: {
		extend: {
			backgroundImage: {
				'marketing-image': "url('/public/website/servicios-1.webp')",
			},
			animation: {
				'loop-scroll': 'loop-scroll 15s linear infinite',
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				}
			},
			boxShadow: {
				'custom-footer': '0px -40px 50px 20px #282A2B',
			},
			borderColor: {
				'custom-pink': '#f571e3',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(0deg, rgba(179,114,207,1) 0%, rgba(0,0,0,0) 100%)',
			},
		},
	},
  plugins: [],
}

