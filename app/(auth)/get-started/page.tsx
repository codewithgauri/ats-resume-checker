'use client';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation'
import { ThreeDCardDemo } from '@/components/threeD/3dCardWrapper';
import Header from '@/components/ui/header';



const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
    return;
  }

};

const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out', error);
    return;
  }

};

export default function SignIn() {
  const router = useRouter()
  const handleClick = async () => {
    await handleGoogleSignIn();
    router.push('/dashboard')
  };

  return (
    
    <div className="h-[1000px]">
    
      <div className="mb-10">
        {/* <h1 className="text-4xl font-bold">Get Started </h1> */}
      </div>
      <ThreeDCardDemo onClick={handleClick} />
      <div className=" flex justify-center items-center">
        <div className="relative inline-flex  group">
          <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>

        </div>
      </div>
    </div>
  
  );
}
