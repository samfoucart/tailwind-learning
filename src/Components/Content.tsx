import circlePicture from '../assets/me/IMG_7522-modified.png';

export function Content() {
  return (
    <>
      <div className="w-full shadow-2xl shadow-amber-900">
        <div className="m-auto lg:max-w-6xl py-6 px-2">
          <div className="grid grid-cols-2 w-full mb-12 justify-center items-center">
            <div className='flex flex-col p-6 lg:py-24 lg:px-36 gap-6 lg:gap-12'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold dark:text-slate-200 text-slate-900 font-serif">
                Samuel <br></br> Foucart
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold dark:text-slate-200 text-slate-900 font-serif">
                Software <br></br> Engineering
              </h1>
            </div>
            <div className='flex flex-row justify-end lg:block'>
              <img className='p-6 size-48 lg:px-36 lg:size-full' src={circlePicture}></img>
            </div>
            
            {/*  p-6 md:px-20 lg:px-36 */}
          </div>
          
          <h1 className="text-3xl font-bold p-6 dark:text-slate-200 text-slate-900 font-serif">
            Here you can find my blog, recent projects, and my updated résumé
          </h1>
          <p className="px-6 py-2 leading-relaxed dark:text-slate-200 text-slate-900">
            As of last update, I have been programming for just a little bit more than 3 years now.
          </p>
          <p className="px-6 py-2 leading-relaxed dark:text-slate-200 text-slate-900">
            I believe that it's important to be a generalist. I have luckily been able to touch almost everywhere in the stack, from the frontend,
            backend, database, networking, and pipelines.
          </p>
          {/* <div className='font-mono bg-slate-100 dark:bg-zinc-900 p-6 leading-relaxed rounded-lg'>
            <p className='text-blue-700'>
              ##
            </p>
            <p>
              My Skills include
            </p>
          </div> */}
          <p className="font-mono bg-slate-100 dark:bg-zinc-900 my-12 mx-6 p-6 leading-relaxed rounded-lg">
            <span className='text-green-700'>## </span>
            My Skills Include
            <br></br>
            &nbsp;<span className='text-blue-700'>- </span>Backend Web
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>C#
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>ASP.NET
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Entity Framework
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Dapper
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>Java
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Spring
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Maven
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Hibernate
            <br></br>
            &nbsp;<span className='text-blue-700'>- </span>Frontend
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>HTML
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>CSS
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Tailwind
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>JavaScript / TypeScript
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>React
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-purple-700'>- </span>Vanilla
            <br></br>
            &nbsp;<span className='text-blue-700'>- </span>Database
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>MSSQL
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>Postgres
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>Dynamo
            <br></br>
            &nbsp;<span className='text-blue-700'>- </span>Cloud
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>Azure / Azure Devops
            <br></br>
            &nbsp;&nbsp;&nbsp;<span className='text-red-700'>- </span>AWS / Cloudformation
            
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            praesentium amet voluptates veniam similique rem et impedit
            voluptas? Beatae, libero enim odio provident porro velit blanditiis
            iusto perferendis dicta sequi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur provident aliquam ea tempora
            autem, ipsa magni corporis. Ullam, mollitia vitae. Magnam eaque
            illum ex quaerat molestiae iure odit? Maxime, nam. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Adipisci, autem? Qui
            labore dolor sunt aut ad architecto, saepe hic facilis minima itaque
            quasi! Inventore a laudantium quas, corporis cupiditate optio!
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            praesentium amet voluptates veniam similique rem et impedit
            voluptas? Beatae, libero enim odio provident porro velit blanditiis
            iusto perferendis dicta sequi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur provident aliquam ea tempora
            autem, ipsa magni corporis. Ullam, mollitia vitae. Magnam eaque
            illum ex quaerat molestiae iure odit? Maxime, nam. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Adipisci, autem? Qui
            labore dolor sunt aut ad architecto, saepe hic facilis minima itaque
            quasi! Inventore a laudantium quas, corporis cupiditate optio!
          </p>
        </div>
      </div>
      <div className="w-full bg-indigo-950 border-t border-slate-900">
        <div className="m-auto lg:max-w-6xl p-6">
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
          <h1 className="text-3xl font-bold dark:text-slate-200 text-slate-900 font-serif p-6">
            Test Heading - This is an example of a heading
          </h1>
          <p className="font-serif p-6 leading-relaxed">
            This is an example of body text. I am writing a column that is long
            here.
          </p>
          <p className="font-serif p-6 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            facilis doloremque eveniet enim ex quae quos dicta eius ipsam eum,
            quo tempore aperiam quidem commodi aliquid molestiae consectetur
            alias deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Iste, minus dolorum obcaecati earum cumque dolore, sapiente
            laboriosam laborum tempora dignissimos praesentium quia omnis
            assumenda iure debitis, quos inventore nobis facere! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempore, doloribus in.
            Exercitationem consequuntur nihil debitis, neque veniam distinctio
            nisi! Illum recusandae impedit natus modi nemo inventore rerum
            expedita neque perferendis?
          </p>
        </div>
      </div>
    </>
  );
}
