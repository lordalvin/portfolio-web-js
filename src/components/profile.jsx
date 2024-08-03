import React from 'react'

export default function profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
        >
          <h4 className="text-secondary mb-3">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            The following are the skills that I have
          </h2>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
              <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[0px] rounded-full overflow-hidden">
                <img src="/images/alvin.jpg" alt="" />
              </div>
              <h2 className="text-gradient text-[50px] mb-[10px]">
                Alvin Parulian
              </h2>
            </div>
            <div className="w-full lg:pt-[50px] lg:ml-[50px]"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/php.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient">PHP</h4>
                          <p className="text-black">bahasa skrip dengan digunakan pengembangan web</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/boostrap.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient">Boostrap</h4>
                          <p className="text-black">kerangka CSS merancang situs dan aplikasi web</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/html.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient">HTML</h4>
                          <p className="text-black"> Bahasa dokumen dirancang untuk ditampilkan di internet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/css.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient"> CSS</h4>
                          <p className="text-black"> mengatur beberapa komponen dalam sebuah web </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/excel.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient">Excel</h4>
                          <p className="text-black">program aplikasi lembar kerja</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full">
                  <div className="bg-white h-full justify-center items-center flex rounded-lg 
                  overflow-hidden relative p-5 group">
                    <img src="/images/figma.png" alt="" />
                    <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex 
                    items-center oppacity-0 scale-0 group-hover:scale-100 group-hover:oppacity-100 
                    transition ease-linear">
                      <div className="text-center w-full text-white">
                        <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                          <h4 className="text-gradient">Figma</h4>
                          <p className="text-black">sebuah aplikasi web kolaboratif </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
