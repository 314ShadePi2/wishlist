import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wishlist app</title>
        <meta name="description" content="Wishlist app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {data}
        </h1>
        <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold'>Show list</div>
            <form className='flex flex-col' onSubmit={submitList}>
              <label htmlFor='name' className='mb-2 italic'>List</label>
              <input className='mb-4 border-b-2' id='list' name='list' type='text' autoComplete='list' required />
              <button type='submit' className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'>Submit</button>
            </form>
          </div>
        </div>
        <div id="ListGoesHere" className="text-center"></div>
      </main>
    </div>
  )
}

const submitList = async (e) => {
  e.preventDefault();
  const list = e.target.list.value;
  console.log(`Url To Fetch: http://localhost:3000/api/list/${list}`)
  const res = await fetch(`http://localhost:3000/api/list/${list}`);
  const result = await res.json();
  console.log(res)
  console.log(result)
  if(result.error){
    document.getElementById("ListGoesHere").innerHTML = `<p id=\"error\">${result.error}</p><p>Status: ${result.status}</p><p>Provided Path/List name: ${result.providedPath}</p><p>Possible true Path/List name: ${result.possibleTruePath}`
  } else if(!result.error){
    document.getElementById("ListGoesHere").innerHTML = ""
    result.list.forEach(function(item, index){
      document.getElementById("ListGoesHere").innerHTML += `<h1 style=\"margin:0;line-height:1.15;font-size:2rem;\">${index + 1}. ${item.name}</h1><p>${item.desc}</p>`
      if(item.link){
        document.getElementById("ListGoesHere").innerHTML += `<a style=\"color:#8ab4f8;\" href=\"${item.link}\">Link to Item</a><br/><br/>`
      } else if(!item.link){
        document.getElementById("ListGoesHere").innerHTML += `<br/>`
      }
    })
  }
};

export async function getServerSideProps(){
  const data = "Wishlist app"
  return { props: { data } }
}
