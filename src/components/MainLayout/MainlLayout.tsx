import Footer from '../Footer'
import Header from '../Header/Header'
interface Props {
  children?: React.ReactNode
}
export default function MainlLayout({ children }: Props) {
  return (
    <div>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
