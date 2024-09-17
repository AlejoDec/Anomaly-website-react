/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
			backgroundImage: {
				'marketing-image': "url('/public/website/servicios-1.png')",
			},
			animation: {
				'loop-scroll': 'loop-scroll 15s linear infinite',
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				}
			}
		},
	},
  plugins: [],
}

