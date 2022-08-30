import Navbar from '../../components/navbar'

export default function handler(req, res) {
	res.status(200).json({ resume: 'Darius Garcia' })
}
