/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class CSomosmuypobres extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section class="cuento">
        <h2>Es que somos muy pobres</h2>
        <p>Aqu&iacute; todo va de mal en peor. La semana pasada se muri&oacute; mi t&iacute;a Jacinta, y el s&aacute;bado,
          cuando ya la hab&iacute;amos enterrado y comenzaba a baj&aacute;rsenos la tristeza, comenz&oacute; a llover como
          nunca. A mi pap&aacute; eso le dio coraje, porque toda la cosecha de cebada estaba asole&aacute;ndose en el solar.
          Y el aguacero lleg&oacute; de repente, en grandes olas de agua, sin darnos tiempo ni siquiera a esconder aunque
          fuera un manojo; lo &uacute;nico que pudimos hacer, todos los de mi casa, fue estarnos arrimados debajo del
          tejab&aacute;n, viendo c&oacute;mo el agua fr&iacute;a que ca&iacute;a del cielo quemaba aquella cebada amarilla
          tan reci&eacute;n cortada. </p>
        <p></p>
        <p>Y apenas ayer, cuando mi hermana Tacha acababa de cumplir doce a&ntilde;os, supimos que la vaca que mi pap&aacute;
          le regal&oacute; para el d&iacute;a de su santo se la hab&iacute;a llevado el r&iacute;o </p>
        <p>El r&iacute;o comenz&oacute; a crecer hace tres noches, a eso de la madrugada. Yo estaba muy dormido y, sin
          embargo, el estruendo que tra&iacute;a el r&iacute;o al arrastrarse me hizo despertar en seguida y pegar el brinco
          de la cama con mi cobija en la mano, como si hubiera cre&iacute;do que se estaba derrumbando el techo de mi casa.
          Pero despu&eacute;s me volv&iacute; a dormir, porque reconoc&iacute; el sonido del r&iacute;o y porque ese sonido
          se fue haciendo igual hasta traerme otra vez el sue&ntilde;o. </p>
        <p>Cuando me levant&eacute;, la ma&ntilde;ana estaba llena de nublazones y parec&iacute;a que hab&iacute;a seguido
          lloviendo sin parar. Se notaba en que el ruido del r&iacute;o era m&aacute;s fuerte y se o&iacute;a m&aacute;s
          cerca. Se ol&iacute;a, como se huele una quemaz&oacute;n, el olor a podrido del agua revuelta. </p>
        <p>A la hora en que me fui a asomar, el r&iacute;o ya hab&iacute;a perdido sus orillas. Iba subiendo poco a poco por
          la calle real, y estaba meti&eacute;ndose a toda prisa en la casa de esa mujer que le dicen <i>la Tambora</i>. El
          chapaleo del agua se o&iacute;a al entrar por el corral y al salir en grandes chorros por la puerta. <i>La Tambora</i>
          iba y ven&iacute;a caminando por lo que era ya un pedazo de r&iacute;o, echando a la calle sus gallinas para que se
          fueran a esconder a alg&uacute;n lugar donde no les llegara la corriente. </p>
        <p>Y por el otro lado, por donde est&aacute; el recodo, el r&iacute;o se deb&iacute;a de haber llevado, qui&eacute;n
          sabe desde cu&aacute;ndo, el tamarindo que estaba en el solar de mi t&iacute;a Jacinta, porque ahora ya no se ve
          ning&uacute;n tamarindo. Era el &uacute;nico que hab&iacute;a en el pueblo, y por eso nom&aacute;s la gente se da
          cuenta de que la creciente esta que vemos es la m&aacute;s grande de todas las que ha bajado el r&iacute;o en
          muchos a&ntilde;os. </p>
        <p>Mi hermana y yo volvimos a ir por la tarde a mirar aquel amontonadero de agua que cada vez se hace m&aacute;s
          espesa y oscura y que pasa ya muy por encima de donde debe estar el puente. All&iacute; nos estuvimos horas y horas
          sin cansarnos viendo la cosa aquella. Despu&eacute;s nos subimos por la barranca, porque quer&iacute;amos
          o&iacute;r bien lo que dec&iacute;a la gente, pues abajo, junto al r&iacute;o, hay un gran ruidazal y s&oacute;lo
          se ven las bocas de muchos que se abren y se cierran y como que quieren decir algo; pero no se oye nada. Por eso
          nos subimos por la barranca, donde tambi&eacute;n hay gente mirando el r&iacute;o y contando los perjuicios que ha
          hecho. All&iacute; fue donde supimos que el r&iacute;o se hab&iacute;a llevado a <i>la Serpentina,</i> la vaca esa
          que era de mi hermana Tacha porque mi pap&aacute; se la regal&oacute; para el d&iacute;a de su cumplea&ntilde;os y
          que ten&iacute;a una oreja blanca y otra colorada y muy bonitos ojos. </p>
        <p>No acabo de saber por qu&eacute; se le ocurrir&iacute;a a <i>la Serpentina</i> pasar el r&iacute;o este, cuando
          sab&iacute;a que no era el mismo r&iacute;o que ella conoc&iacute;a de a diario. <i>La Serpentina</i> nunca fue tan
          atarantada. Lo m&aacute;s seguro es que ha de haber venido dormida para dejarse matar as&iacute; nom&aacute;s por
          nom&aacute;s. A m&iacute; muchas veces me toc&oacute; despertarla cuando le abr&iacute;a la puerta del corral
          porque si no, de su cuenta, all&iacute; se hubiera estado el d&iacute;a entero con los ojos cerrados, bien quieta y
          suspirando, como se oye suspirar a las vacas cuando duermen. </p>
        <p>Y aqu&iacute; ha de haber sucedido eso de que se durmi&oacute;. Tal vez se le ocurri&oacute; despertar al sentir
          que el agua pesada le golpeaba las costillas. Tal vez entonces se asust&oacute; y trat&oacute; de regresar; pero al
          volverse se encontr&oacute; entreverada y acalambrada entre aquella agua negra y dura como tierra corrediza. Tal
          vez bram&oacute; pidiendo que le ayudaran. Bram&oacute; como s&oacute;lo Dios sabe c&oacute;mo. </p>
        <p>Yo le pregunt&eacute; a un se&ntilde;or que vio cuando la arrastraba el r&iacute;o si no hab&iacute;a visto
          tambi&eacute;n al becerrito que andaba con ella. Pero el hombre dijo que no sab&iacute;a si lo hab&iacute;a visto.
          S&oacute;lo dijo que la vaca manchada pas&oacute; patas arriba muy cerquita de donde &eacute;l estaba y que
          all&iacute; dio una voltereta y luego no volvi&oacute; a ver ni los cuernos ni las patas ni ninguna se&ntilde;al de
          vaca. Por el r&iacute;o rodaban muchos troncos de &aacute;rboles con todo y ra&iacute;ces y &eacute;l estaba muy
          ocupado en sacar le&ntilde;a, de modo que no pod&iacute;a fijarse si eran animales o troncos los que arrastraba.
        </p>
        <p>Nom&aacute;s por eso, no sabemos si el becerro est&aacute; vivo, o si se fue detr&aacute;s de su madre r&iacute;o
          abajo. Si as&iacute; fue, que Dios los ampare a los dos.</p>
        <p>La apuraci&oacute;n que tienen en mi casa es lo que pueda suceder el d&iacute;a de ma&ntilde;ana, ahora que mi
          hermana Tacha se qued&oacute; sin nada. Porque mi pap&aacute; con muchos trabajos hab&iacute;a conseguido a <i>la
            Serpentina</i>, desde que era una vaquilla, para d&aacute;rsela a mi hermana, con el fin de que ella tuviera un
          capitalito y no se fuera a ir de piruja como lo hicieron mis otras dos hermanas, las m&aacute;s grandes. </p>
        <p>Seg&uacute;n mi pap&aacute;, ellas se hab&iacute;an echado a perder porque &eacute;ramos muy pobres en mi casa y
          ellas eran muy retobadas. Desde chiquillas ya eran rezongonas. Y tan luego que crecieron les dio por andar con
          hombres de lo peor, que les ense&ntilde;aron cosas malas. Ellas aprendieron pronto y entend&iacute;an muy bien los
          chiflidos, cuando las llamaban a altas horas de la noche. Despu&eacute;s sal&iacute;an hasta de d&iacute;a. Iban
          cada rato por agua al r&iacute;o y a veces, cuando uno menos se lo esperaba, all&iacute; estaban en el corral,
          revolc&aacute;ndose en el suelo, todas encueradas y cada una con un hombre trepado encima. </p>
        <p>Entonces mi pap&aacute; las corri&oacute; a las dos. Primero les aguant&oacute; todo lo que pudo; pero m&aacute;s
          tarde ya no pudo aguantarlas m&aacute;s y les dio carrera para la calle. Ellas se fueron para Ayutla o no s&eacute;
          para d&oacute;nde; pero andan de pirujas. </p>
        <p>Por eso le entra la mortificaci&oacute;n a mi pap&aacute;, ahora por la Tacha, que no quiere vaya a resultar como
          sus otras dos hermanas, al sentir que se qued&oacute; muy pobre viendo la falta de su vaca, viendo que ya no va a
          tener con qu&eacute; entretenerse mientras le da por crecer y pueda casarse con un hombre bueno, que la pueda
          querer para siempre. Y eso ahora va a estar dif&iacute;cil. Con la vaca era distinto, pues no hubiera faltado
          qui&eacute;n se hiciera el &aacute;nimo de casarse con ella, s&oacute;lo por llevarse tambi&eacute;n aquella vaca
          tan bonita. </p>
        <p>La &uacute;nica esperanza que nos queda es que el becerro est&eacute; todav&iacute;a vivo. Ojal&aacute; no se le
          haya ocurrido pasar el r&iacute;o detr&aacute;s de su madre. Porque si as&iacute; fue, mi hermana Tacha est&aacute;
          tantito as&iacute; de retirado de hacerse piruja. Y mam&aacute; no quiere. </p>
        <p>Mi mam&aacute; no sabe por qu&eacute; Dios la ha castigado tanto al darle unas hijas de ese modo, cuando en su
          familia, desde su abuela para ac&aacute;, nunca ha habido gente mala. Todos fueron criados en el temor de Dios y
          eran muy obedientes y no le comet&iacute;an irreverencias a nadie. Todos fueron por el estilo. Qui&eacute;n sabe de
          d&oacute;nde les vendr&iacute;a a ese par de hijas suyas aquel mal ejemplo. Ella no se acuerda. Le da vueltas a
          todos sus recuerdos y no ve claro d&oacute;nde estuvo su mal o el pecado de nacerle una hija tras otra con la misma
          mala costumbre. No se acuerda. Y cada vez que piensa en ellas, llora y dice: &ldquo;Que Dios las ampare a las
          dos.&rdquo; </p>
        <p>Pero mi pap&aacute; alega que aquello ya no tiene remedio. La peligrosa es la que queda aqu&iacute;, la Tacha, que
          va como palo de ocote crece y crece y que ya tiene unos comienzos de senos que prometen ser como los de sus
          hermanas: puntiagudos y altos y medio alborotados para llamar la atenci&oacute;n.</p>
        <p>-S&iacute; -dice-, le llenar&aacute; los ojos a cualquiera dondequiera que la vean. Y acabar&aacute; mal; como que
          estoy viendo que acabar&aacute; mal.</p>
        <p>&Eacute;sa es la mortificaci&oacute;n de mi pap&aacute;. </p>
        <p>Y Tacha llora al sentir que su vaca no volver&aacute; porque se la ha matado el r&iacute;o. Est&aacute;
          aqu&iacute; a mi lado, con su vestido color de rosa, mirando el r&iacute;o desde la barranca y sin dejar de llorar.
          Por su cara corren chorretes de agua sucia como si el r&iacute;o se hubiera metido dentro de ella. </p>
        <p>Yo la abrazo tratando de consolarla, pero ella no entiende. Llora con m&aacute;s ganas. De su boca sale un ruido
          semejante al que se arrastra por las orillas del r&iacute;o, que la hace temblar y sacudirse todita, y, mientras,
          la creciente sigue subiendo. El sabor a podrido que viene de all&aacute; salpica la cara mojada de Tacha y los dos
          pechitos de ella se mueven de arriba abajo, sin parar, como si de repente comenzaran a hincharse para empezar a
          trabajar por su perdici&oacute;n. </p>
        <p align="center" class="fin">FIN</p>
      </section>
    `
  }
}

window.customElements.define('c-somosmuypobres', CSomosmuypobres);
