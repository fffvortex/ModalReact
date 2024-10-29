import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal";
import leo from "./assets/leo.gif";

function App() {
  const [modalActive, setModalActive] = useState();
  return (
    <>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>Modal</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setModalActive(true)}>😀 (open) 😀</Button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <img style={{ borderRadius: "20px" }} src={leo} alt="" />
      </Modal>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        perferendis quo eligendi soluta adipisci unde nesciunt optio inventore
        odit repellendus, a totam reprehenderit, alias id, officia aut natus
        sunt tempore. Assumenda, libero. Nesciunt, voluptas minima. Est beatae
        praesentium quo dicta, quos a provident alias pariatur doloribus minima
        error eius, suscipit natus, doloremque vero eum at cum odio hic nobis
        itaque similique cumque officia? Dicta maxime delectus necessitatibus
        dolore odio sed placeat facere alias harum reiciendis vero nisi, libero
        quod a voluptas quam ab itaque mollitia officiis doloribus excepturi at
        minus exercitationem quasi. Ipsum hic aliquid natus cumque excepturi
        perspiciatis sequi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        omnis nostrum? Veritatis quam cupiditate dignissimos deleniti alias
        accusantium architecto nihil quos distinctio saepe praesentium ipsa
        maiores quod voluptatibus vel, cum natus eligendi atque itaque eius
        libero laudantium odit in! Quia nulla dignissimos nesciunt unde maxime
        suscipit veritatis optio molestias corporis necessitatibus possimus quae
        magni, ducimus repudiandae debitis nobis minima adipisci culpa natus quo
        incidunt sed error dolore. Dolore enim vitae velit tempore eum odit
        porro pariatur, quis reprehenderit eveniet, dignissimos ad odio culpa.
        Commodi ullam quibusdam numquam natus? Nesciunt, vero, quia mollitia et
        aliquam provident est dolorum, rem soluta error a. Aspernatur, neque.
        Exercitationem eum obcaecati repudiandae quia totam iste sint voluptatum
        atque tempora at provident excepturi, corporis blanditiis? Fugit impedit
        reiciendis accusantium molestias explicabo eligendi laudantium, ducimus
        ad eaque at eum praesentium rem! Architecto sapiente veniam voluptate
        quam saepe, nulla quasi magnam adipisci laudantium blanditiis aliquam
        reiciendis voluptatem dicta quas, et commodi eius, est voluptas alias?
        Quisquam a sit harum molestias ad tempore! Assumenda quisquam a tempora
        nostrum quo. Unde facere quam fugiat. Perferendis excepturi repudiandae
        eveniet aut, earum doloremque. Perspiciatis et iusto sed molestias non
        provident eos! Amet doloribus debitis corrupti! Qui sit ipsa assumenda
        distinctio nulla, ut necessitatibus, doloremque at hic fuga provident.
        Odit vitae omnis voluptatibus cumque eligendi distinctio unde dolor
        asperiores maxime laboriosam nulla molestias aliquid repellat
        consequuntur possimus ducimus facilis, beatae molestiae animi voluptas
        modi minima. Voluptatibus earum soluta praesentium voluptas ut
        doloremque tempora eum adipisci ipsam maiores corporis deserunt dolorem
        accusamus animi alias odio, qui voluptatem nisi natus et amet.
        Reprehenderit nobis, laudantium iusto ipsum a aspernatur distinctio
        eaque non earum et quo praesentium hic maiores maxime, laborum
        doloremque veritatis ratione. Facilis animi id doloribus dolores non
        quasi. Dolorum suscipit delectus earum facilis mollitia illum, cumque
        aperiam accusamus, laudantium ratione natus. Possimus, molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel placeat,
        aspernatur cupiditate nisi nesciunt autem odit id sit quae provident
        necessitatibus possimus, deleniti ipsum voluptate repellendus, animi
        fugiat a qui. Minima reprehenderit dignissimos possimus ea quos hic,
        consequuntur, beatae quibusdam officia sunt illo quod quia, vitae sed
        corporis dolor. Voluptate alias nesciunt, animi sunt quas officiis
        delectus totam repellat consequuntur ipsum deserunt quasi ea, a vero
        omnis sapiente optio nihil labore impedit! Dicta assumenda error
        repellat soluta beatae ipsum maiores iure cum id, commodi deleniti!
        Optio ipsa, veniam vel deserunt eligendi sequi! Doloremque provident
        nesciunt voluptates mollitia officia molestiae quae reiciendis aliquid
        laudantium architecto? Accusantium commodi aut veritatis expedita fuga
        delectus consequatur suscipit dolore ex consectetur! Praesentium laborum
        fugiat possimus illo sint, velit, ut architecto harum cupiditate
        provident suscipit tempore atque a incidunt sed ad nulla! Doloribus
        magni commodi optio odit, impedit quo rerum neque. Iusto enim earum vel
        tempora, numquam libero illum impedit quo ipsa fuga, quisquam ipsam?
        Labore sit quos ratione doloribus amet, inventore, quis dicta eveniet
        dolor tempora exercitationem incidunt facilis! Ad velit labore minus
        nostrum, aperiam excepturi in non, quas dolor nam quae vero culpa
        quaerat neque ut consectetur cumque soluta aut veniam, facere eveniet
        inventore esse assumenda minima. Ab animi, nemo sequi aliquam possimus
        molestiae quasi repudiandae et aliquid maiores? Vitae officiis
        voluptates veritatis! Totam ullam, aperiam consectetur quibusdam tenetur
        voluptate ipsum velit itaque recusandae, dolore delectus eius esse modi
        deleniti quas dicta magni voluptas suscipit voluptatem, ex assumenda
        laborum alias. Inventore distinctio praesentium nesciunt natus. Iste
        vitae ex delectus expedita veniam in, nihil dolorem voluptatem culpa
        odit cumque cum dolores voluptatum quisquam quia consequuntur optio, id
        itaque laudantium cupiditate nulla. Quaerat necessitatibus in labore at
        vero quisquam inventore illo repellat minus esse nemo corporis
        recusandae voluptatibus ratione est, eveniet sit perferendis doloribus
        ipsam mollitia maiores impedit reiciendis ea! Minima illo ipsa quasi
        velit, laborum beatae porro autem alias reiciendis incidunt? Magnam
        nobis dicta, unde dolorum iure nam necessitatibus recusandae repudiandae
        rerum iste ab quae voluptate natus laboriosam animi eius. Neque,
        molestias amet itaque accusantium, magnam sequi hic quos placeat illum
        explicabo optio quasi debitis inventore quod culpa iure quis, blanditiis
        doloribus. Error quis laborum assumenda sapiente veniam nostrum facere
        labore nihil dignissimos repellat facilis nesciunt et molestiae non
        necessitatibus ab voluptate expedita quo, voluptatem ad dolore nam?
        Eaque, ex? Corporis nemo molestiae dignissimos eligendi neque temporibus
        unde a reiciendis similique optio aliquam debitis inventore, commodi
        facere non quaerat consequuntur! Facere, corporis saepe id ex quae alias
        voluptatum ipsum dicta ea quas qui tempore repudiandae suscipit veniam
        dolorem expedita? Iste quidem, asperiores error, necessitatibus culpa
        molestias nesciunt repudiandae reprehenderit veniam facilis alias
        tempore quam dicta ea velit repellendus! Temporibus cum deserunt et
        cumque? Architecto reiciendis, excepturi quas harum animi, voluptatibus
        unde porro nulla ipsam asperiores reprehenderit fugiat dolor voluptates
        id sequi ipsum, quod voluptatum! Ipsa dicta, iusto blanditiis neque amet
        hic! Rerum, quam laborum aliquid dolorum consequatur porro. Eum iusto
        soluta possimus deserunt harum tempore, neque iure ad non? Numquam
        facilis explicabo necessitatibus, vitae tempora incidunt. Quod sint
        nulla recusandae aut ea nam quae rerum, natus, totam quasi, eveniet
        eius! Dolore, ipsam id natus repellat, illo doloribus rerum doloremque
        eveniet quasi praesentium officiis autem tempore, illum iusto? Incidunt
        earum placeat aliquid sapiente quod magnam ad eligendi ullam tenetur
        unde? Voluptate ipsa atque doloremque a placeat. Dolores ratione animi
        harum quaerat sed placeat vero, ad necessitatibus eaque esse impedit
        praesentium error tempore sit recusandae alias minus ab odio aliquid,
        est, omnis doloribus deserunt rem. Voluptatum libero pariatur rerum nemo
        assumenda deserunt vel laudantium! Nemo optio obcaecati quam excepturi
        enim totam sapiente in reiciendis vero doloremque! Est.
      </p>
    </>
  );
}

export default App;
