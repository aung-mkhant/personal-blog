/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["[data-theme='dark']"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: 'var(--main)',
				overlay: 'var(--overlay)',
				bg: 'var(--bg)',
				highlight: 'var(--highlight)',
				card: 'var(--card)',
				bw: 'var(--bw)',
				blank: 'var(--blank)',
				text: 'var(--text)',
				mtext: 'var(--mtext)',
				border: 'var(--border)',
				ring: 'var(--ring)',
				ringOffset: 'var(--ring-offset)',
				secondaryBlack: '#212121'
			},
			borderRadius: {
				base: '5px'
			},
			boxShadow: {
				shadow: 'var(--shadow)'
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '-4px'
			},
			fontFamily: {
				'young-serif': [
					'var(--font-young-serif)',
					'serif'
				],
				literata: [
					'var(--font-literata)',
					'serif'
				]
			},
			fontWeight: {
				base: '500',
				heading: '700'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
