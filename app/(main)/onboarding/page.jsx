import { industries } from '@/data/industries';
import React from 'react'
import OnboardingForm from './_components/onboarding-form';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const OnboardingPage = async () => {

  // Check if user is already onboarded , if yes redirect to dashboard

  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded){
    // Redirect to dashboard
    redirect('/dashboard');
  }

  return <main>
    <OnboardingForm industries={industries} />
  </main>
}

export default OnboardingPage;