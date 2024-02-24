function App() {

  return (
    <>
    1. font family
    <br/>
      <div className="w-full">
        <p className="font-sans">the quick brown fox</p>
        <br/>
        <p className="font-serif">the quick brown fox</p>
        <br/>
        <p className="font-mono">the quick brown fox</p>
      </div>
      <br/>
      2. hover
      <br/>
      <p className="font-sans hover:font-serif">kesini aja :)</p>
      <br/>
      3. font size
      <br/>
      <p className="text-sm">Kecil</p>
      <br/>
      <p className="text-base">Biasa</p>
      <br/>
      <p className="text-lg">Gede</p>
      <br/>
      <p className="text-xl">Lebih gede</p>
      <br/>
      <p className="text-2xl">Gede banget</p>
      <br/>
      <p className="text-[100px]">Custom</p>
      <br/>
      4. italic
      <br/>
      <p className="italic">the quick brown fox</p>
      <br/>
      <p className="not-italic">the quick brown fox</p>
      <br/>
      5. font weight
      <br/>
      <p className="font-light">the quick brown fox</p>
      <br/>
      <p className="font-normal">the quick brown fox</p>
      <br/>
      <p className="font-medium">the quick brown fox</p>
      <br/>
      <p className="font-semibold">the quick brown fox</p>
      <br/>
      <p className="font-bold">the quick brown fox</p>
      <br/>
      6. letter spacing
      <br/>
      <p className="tracking-tighter">the quick brown fox</p>
      <br/>
      <p className="tracking-normal">the quick brown fox</p>
      <br/>
      <p className="tracking-widest">the quick brown fox</p>
      <br/>
      7. line height
      <br/>
      <p className="leading-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aspernatur commodi doloremque 
        fuga fugit culpa dolores sed voluptates, veritatis amet consequuntur dolorum ex qui consequatur soluta! Facere, possimus officia.
      </p>
      <hr/>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi dicta ad sed, sint fugiat 
        error, nemo hic incidunt reprehenderit ut! Dignissimos laborum doloribus nisi. Facere sequi ea debitis laudantium.
      </p>
      <hr/>
      <p className="leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus magni quis non amet placeat sequi 
        numquam odit perferendis facere fugiat natus animi facilis quod, delectus commodi repellat et voluptate quos.
      </p>
      <hr/>
      8. text align
      <hr/>
      <p className="text-right">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae optio aspernatur commodi doloremque 
        fuga fugit culpa dolores sed voluptates, veritatis amet consequuntur dolorum ex qui consequatur soluta! Facere, possimus officia.
      </p>
      <hr/>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi dicta ad sed, sint fugiat 
        error, nemo hic incidunt reprehenderit ut! Dignissimos laborum doloribus nisi. Facere sequi ea debitis laudantium.
      </p>
      <hr/>
      <p className="text-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus magni quis non amet placeat sequi 
        numquam odit perferendis facere fugiat natus animi facilis quod, delectus commodi repellat et voluptate quos.
      </p>
      <hr/>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus magni quis non amet placeat sequi 
        numquam odit perferendis facere fugiat natus animi facilis quod, delectus commodi repellat et voluptate quos.
      </p>
      <br/>
      9. text color
      <br/>
      <p className="text-sky-300">the quick brown fox</p>
      <br/>
      <p className="text-sky-400">the quick brown fox</p>
      <br/>
      <p className="text-sky-500">the quick brown fox</p>
      <br/>
      <p className="text-sky-600">the quick brown fox</p>
      <br/>
      <p className="text-sky-700">the quick brown fox</p>
      <br/>
      <p className="text-sky-800">the quick brown fox</p>
      <br/>
      <p className="text-sky-900 hover:text-purple-500">the quick brown fox</p>
      <br/>
      10. text decoration
      <br/>
      <p className="underline">the quick brown fox</p>
      <br/>
      <p className="overline">the quick brown fox</p>
      <br/>
      <p className="line-through">the quick brown fox</p>
      <br/>
      <p className="no-underline">the quick brown fox</p>
      <br/>
      <p className="underline decoration-solid">the quick brown fox</p>
      <br/>
      <p className="underline decoration-double">the quick brown fox</p>
      <br/>
      <p className="underline decoration-dotted">the quick brown fox</p>
      <br/>
      <p className="underline decoration-dashed">the quick brown fox</p>
      <br/>
      <p className="underline decoration-wavy">the quick brown fox</p>
      <br/>
      11. background
      <br/>
      <div className="bg-indigo-500">background color</div>
      <div className="bg-rose-500">background color</div>
      <div className="bg-teal-500">background color</div>
      <br/>
      12. width
      <br/>
      <div className="w-full bg-indigo-300">w-96</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-700">w-48r</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900 text-gray-50">w-32</div>
      <div className="w-24 bg-indigo-950 text-gray-50">w-24</div>
      <div className="w-[500px] bg-indigo-500">w-CUSTOM</div>
      <br/>
      13. height
      <br/>
      <div className="w-96 h-96 bg-indigo-300">h-96</div>
      <div className="w-80 h-80 bg-indigo-400">h-80</div>
      <div className="w-64 h-64 bg-indigo-500">h-64</div>
      <div className="w-48 h-48 bg-indigo-600">h-48r</div>
      <div className="w-40 h-40 bg-indigo-700">h-40</div>
      <div className="w-32 h-32 bg-indigo-800">h-32</div>
      <div className="h-[100px] w-24 bg-indigo-950">h-CUSTOM</div>
      <div className="w-screen h-screen bg-indigo-900">h-screen</div>
      <br/>
      13. justify content + gap
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br/>
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br/>
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br/>
      <div className="flex justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">01</div>
        <div className="p-2 rounded-lg bg-sky-500">02</div>
        <div className="p-2 rounded-lg bg-sky-500">03</div>
      </div>
      <br/>
      14. padding
      <br/>
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-indigo-500">pb-8</div>
      <div className="pl-2 bg-teal-500">pl-2</div>
      <div className="py-2 bg-sky-500">py-2</div>
      <div className="px-2 bg-gray-500">px-2</div>
      <div className="px-[50px] bg-purple-500">padding CUSTOM</div>
      <br/>
      15. margin
      <br/>
      <div className="mt-6 bg-slate-500">mt-6</div>
      <div className="mr-4 bg-rose-500">mr-4</div>
      <div className="mb-8 bg-indigo-500">mb-8</div>
      <div className="ml-2 bg-teal-500">ml-2</div>
      <div className="my-2 bg-sky-500">my-2</div>
      <div className="mx-2 bg-gray-500">mx-2</div>
      <div className="mx-[50px] bg-purple-500">margin CUSTOM</div>
      <br/>
      16. border
      <br/>
      <div className="rounded w-40 text-center border-2 border-rose-500">
        rounded
      </div>
      <div className="rounded-md w-40 text-center border-4 border-indigo-500">
        rounded-md
      </div>
      <div className="rounded-lg w-40 text-center border-2 border-teal-500">
        rounded-lg
      </div>
      <div className="rounded-full w-40 text-center border-8 border-sky-500">
        rounded-full
      </div>
      <div className="rounded-[100px] w-40 text-center border-[3px] border-slate-500">
        rounded-CUSTOM
      </div>
      <br/>
      17. flex
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-500">
          flex-none lorem ipsum dolor sit.
        </div>
        <div className="flex-initial w-64 bg-violet-500">
          flex-initial Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Velit expedita quas eos eligendi pariatur tempora dolorum ipsam labore 
           consequatur at voluptas harum neque, ad in rerum. Quidem reiciendis blanditiis minima.
        </div>
        <div className="flex-auto w-32 bg-sky-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
          . Qui laborum ea totam dolorem vero quasi minima magni 
          quas ullam, pariatur consequuntur corporis voluptatibus 
          incidunt eius dolorum tempore unde dicta consequatur.
        </div>
      </div>
      <br/>
      19. cursor
      <br/>
      <button type="button" className="cursor-pointer bg-rose-500 p-2 rounded-md">
        Submit
      </button>
      <br/>
      <br/>
      <button type="button" className="cursor-progress bg-indigo-500 p-2 rounded-md">
        Saving
      </button>
      <br/>
      <br/>
      <button type="button" disabled className="cursor-not-allowed bg-emerald-500 p-2 rounded-md">
        Confirm
      </button>
      <br/>
      20. shadow
      <br/>
      <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2">
        Subscribe
      </div>
      <br/>
      <div className="bg-blue-500 shadow-lg shadow-blue-500/50 w-40 rounded-xl text-center py-2">
        Like
      </div>
      <br/>
      <div className="bg-indigo-500 shadow-xl shadow-indigo-500/50 w-40 rounded-xl text-center py-2">
        Share
      </div>
      <br/>
      21. display
      <br/>
      <div>
        when controlling the flow of text, using the css property
        <span className="inline bg-slate-500">
          display: inline - Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus quam, rem quidem ut aliquid pariatur cupiditate 
          vel aliquam facilis sunt suscipit deserunt consequuntur nisi 
          quasi dignissimos rerum similique. Veritatis, ut.
        </span>
        will cause the text text inside the element to wrap normally
      </div>
      <br/>
      <div>
        when controlling the flow of text, using the css property
          <span className="inline-block bg-slate-500">
            display: inline block - Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus quam, rem quidem ut aliquid pariatur cupiditate 
            vel aliquam facilis sunt suscipit deserunt consequuntur nisi 
            quasi dignissimos rerum similique. Veritatis, ut.
          </span>
          will cause the text text inside the element to wrap normally
      </div>
      <br/>
      <div>
        lastly, using the property{" "}
          <span className="block bg-slate-500">
            display: block - Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Delectus quam, rem quidem ut aliquid pariatur cupiditate 
            vel aliquam facilis sunt suscipit deserunt consequuntur nisi 
            quasi dignissimos rerum similique. Veritatis, ut.
          </span>
          will put the element on its own line and fill its parent.
      </div>
    </>
  )
}

export default App
