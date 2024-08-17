import Link from 'next/link';
import logo from '../../public/logo.svg';
import Image from 'next/image'

export default function Navigation () {
  return (
  <div className='flex flex-col w-full'>
    <div className='flex flex-row justify-between items-center p-2'>
      <div>
        <Image src={logo} alt='logo'/>
      </div>
      <nav>
        <ul className='flex flex-row gap-10'>
          <li>
            <Link href="/" className='font-Pretendard'>홈</Link>
          </li>
          <li>
            <Link href="/projects" className='font-Pretendard'>프로젝트</Link>
          </li>
          <li>
            <Link href="/reviews" className='font-Pretendard'>후기</Link>
          </li>
          <li>
            <Link href="/recruit" className='font-Pretendard'>리크루팅</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}