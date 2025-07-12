import Image from "next/image";
import { Link } from "next/navigation";

const NavBar = () => {
  return (
    <nav>
      <div className=''>
        <Image src={} width='40' height='40' alt='Mouse' />

        <Link href='/'> about </Link>
        <Link href='/posts'> posts </Link>
      </div>
    </nav>
  );
};

export default NavBar;
