import React from 'react';

const Pricing = () => {
return (
<div className='container mx-auto '>
    
<div className='text-center mt-22.5 mb-12.5'>
<h1 className='text-[48px] font-bold'>Simple, Transparent Pricing</h1>
<p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
<div className='first shadow-xl w-95 h-105.5 space-y-4 p-6 rounded-2xl'>
<div>
<h2 className='text-2xl'>Starter</h2>
<p className='text-[#627382]'>Perfect for getting started</p>
</div>
<div className=''><span className='text-[40px]'>$0</span>/Month</div>

<div>
    <div>✓ 50+ Frontier Models</div>
          <div>✓ No Usage Limits</div>
          <div>✓ Cancel Anytime</div>
</div>
<button className='btn btn-primary rounded-full w-full mt-[50px]' >Contacct</button>
</div>


<div className='middle bg-blue-600 shadow-xl w-95 h-105.5 space-y-4 p-6 text-white rounded-2xl'>
    <div>
<h2 className='text-2xl'>Pro</h2>
<p className=''>Perfect for getting started</p>
</div>
<div className=''><span className='text-[40px]'>$29</span>/Month</div>

<div>
    <div>✓ 50+ Frontier Models</div>
        <div>✓Access to all premium tools</div>
          <div>✓ No Usage Limits</div>
          <div>✓ Cancel Anytime</div>
</div>
<button className='btn btn-outline rounded-full w-full mt-[50px]' >Start Pro Trial</button>
</div>


<div className='last shadow-xl w-95 h-105.5 space-y-4 p-6 rounded-2xl'>

    <div>
<h2 className='text-2xl'>Enterprice</h2>
<p className='text-[#627382]'>Perfect for getting started</p>
</div>
<div className=''><span className='text-[40px]'>$99</span>/Month</div>

<div>
    <div>✓ 50+ Frontier Models</div>
          <div>✓ No Usage Limits</div>
          <div>✓ Cancel Anytime</div>
</div>
<button className='btn btn-primary rounded-full w-full mt-[50px]' >Get Started Free</button>
</div>

</div>


</div>
    );
};

export default Pricing;