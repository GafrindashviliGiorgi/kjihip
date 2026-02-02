import React from 'react'

const App = () => {
  return (
    <div className='flex items-center justify-center px-6 min-h-dvh'>
      <section className='flex max-w-[1170px] w-full justify-between'>
        <div className='w-full flex-1'>
          <h1 className='text-[32px] font-bold text-[#36454F] leading-[150%]'>პროექტის შესახებ </h1>
          <p className='text-[14px] text-[#36454F] leading-[120%] text-justify mb-[28px] mt-[33px]'>სარკვევი განკუთვნილია საბაკალავრო საფეხურის სტუდენტებისათვის, რომლებსაც ეკითხებათ სასწავლო კურსი „ბოტანიკა“, ასევე ბოტანიკით დაინტერესებული მაგისტრანტების, დოქტორანტების, მკვლევარებისა და მოყვარული ბოტანიკოსებისათვის, რომლებსაც აქვთ სურვილი მცენარეთა ოჯახების რკვევის პრაქტიკულ უნარ-ჩვევებს დაეუფლონ.</p>
          <a href="" className='text-[#12C295] bg-[#DAFFF6] px-[23px] py-[12px] rounded-[10px] border-[#12C95] hover:bg-[#12C295] hover:text-white duration-300 tracking-all font-[500]'>სრულიად</a>
        </div>
        <div className='flex-1'>
          <img className='w-[652px]' 
          src="/assets/bg-image.png"
          alt="" />
        </div>
      </section>
    </div>
  );
};

export default App