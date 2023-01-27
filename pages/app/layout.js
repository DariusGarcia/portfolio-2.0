import Navbar from '../../components/navbar'

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
