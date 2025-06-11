import { BsPeopleFill } from "react-icons/bs"; 
import {
  LayoutDashboard,
  Users,         // untuk pelanggan
  ShoppingCart,  // untuk penjualan
  Box,           // untuk produk
  BarChart2,     // untuk laporan
  Settings,      // untuk pengaturan akun
  User,
  LogIn,
  UserPlus,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom';
import { FaCoffee, FaQuestionCircle } from "react-icons/fa";
import { MdPeopleAlt, MdFeedback  } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Sales', icon: <ShoppingCart />, path: '/sales' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Customer', icon: <BsPeopleFill />, path: '/customer' },
  { name: 'FAQ', icon: <FaQuestionCircle />, path: '/faq' },
  { name: 'Feedback', icon: <MdFeedback />, path: '/feedback' },
  { name: 'Shift', icon: <AiFillSchedule />, path: '/shiftManagement' },
  { name: 'Outlet', icon: <FaMapLocationDot />, path: '/branch' },
]

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-orange-700">Tomoro Coffee</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${
              isActive(item.path)
                ? 'bg-orange-200 text-orange-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar