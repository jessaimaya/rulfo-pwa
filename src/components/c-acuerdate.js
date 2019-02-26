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

class CAcuerdate extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
      <section class="cuento">
        <h2>Acuérdate</h2>
        <p>Acu&eacute;rdate de Urbano G&oacute;mez, hijo de don Urbano, nieto de Dimas, aqu&eacute;l que dirig&iacute;a las
          pastorelas y que muri&oacute; recitando el &ldquo;rezonga &aacute;ngel maldito&rdquo; cuando la &eacute;poca de la
          gripe. De esto hace ya a&ntilde;os, quiz&aacute; quince. Pero te debes acordar de &eacute;l. Acu&eacute;rdate que
          le dec&iacute;amos &ldquo;el Abuelo&rdquo; por aquello de que su otro hijo, Fidencio G&oacute;mez, ten&iacute;a dos
          hijas muy juguetonas: una prieta y chaparrita, que por mal nombre le dec&iacute;an <i>la</i> <i>Arremangada</i>, y
          la otra que era rete alta y que ten&iacute;a los ojos zarcos y que hasta se dec&iacute;a que ni era suya y que por
          m&aacute;s se&ntilde;as estaba enferma del hipo. Acu&eacute;rdate del relajo que armaba cuando est&aacute;bamos en
          misa y que a la mera hora de la Elevaci&oacute;n soltaba un ataque de hipo, que parec&iacute;a como si estuviera
          riendo y llorando a la vez, hasta que la sacaban fuera y le daban tantita agua con az&uacute;car y entonces se
          calmaba. Esa acab&oacute; cas&aacute;ndose con Lucio Chico, due&ntilde;o de la mezcalera que antes fue de Librado,
          r&iacute;o arriba, por donde est&aacute; el molino de linaza de los Te&oacute;dulos. </p>
        <p>Acu&eacute;rdate que a su madre le dec&iacute;an <i>la Berenjena</i> porque siempre andaba metida en l&iacute;os y
          de cada l&iacute;o sal&iacute;a con un muchacho. Se dice que tuvo su dinerito, pero se lo acab&oacute; en los
          entierros, pues todos los hijos se le mor&iacute;an reci&eacute;n nacidos y siempre les mandaba cantar alabanzas,
          llev&aacute;ndolos al pante&oacute;n entre m&uacute;sica y coros de monaguillos que cantaban &ldquo;hosannas&rdquo;
          y &ldquo;glorias&rdquo; y la canci&oacute;n esa de &ldquo;ah&iacute; te mando, Se&ntilde;or, otro angelito&rdquo;.
          De eso se qued&oacute; pobre, porque le resultaba caro cada funeral, por eso de las canelas que les daba a los
          invitados del velorio. S&oacute;lo le vivieron dos, el Urbano y la Natalia, que ya nacieron pobres y a los que ella
          no vio crecer, porque se muri&oacute; en el &uacute;ltimo parto que tuvo, ya de grande, pegada a los cincuenta
          a&ntilde;os. </p>
        <p>La debes haber conocido, pues era muy discutidora y cada rato andaba en pleito con las vendedoras en la plaza del
          mercado porque le quer&iacute;an dar muy caros los jitomates, pegaba gritos y dec&iacute;a que la estaban robando.
          Despu&eacute;s, ya pobre, se le ve&iacute;a rondando entre la basura, juntando rabos de cebolla, ejotes ya
          sancochados y alguno que otro ca&ntilde;uto de ca&ntilde;a &ldquo;para que se les endulzara la boca a sus
          hijos&rdquo;. Ten&iacute;a dos, como ya te digo, que fueron los &uacute;nicos que se le lograron. Despu&eacute;s no
          se supo ya de ella. </p>
        <p>Ese Urbano G&oacute;mez era m&aacute;s o menos de nuestra edad, apenas unos meses m&aacute;s grande, muy bueno
          para jugar a la rayuela y para las tr&aacute;calas. Acu&eacute;rdate que nos vend&iacute;a clavellinas y nosotros
          se las compr&aacute;bamos, cuando lo m&aacute;s f&aacute;cil era ir a cortarlas al cerro. Nos vend&iacute;a mangos
          verdes que se robaba del mango que estaba en el patio de la escuela y naranjas con chile que compraba en la
          porter&iacute;a a dos centavos y que luego nos las revend&iacute;a a cinco. Rifaba cuanta porquer&iacute;a y media
          tra&iacute;a en el bolso: canicas &aacute;gata, trompos y zumbadores y hasta mayates verdes, de esos a los que se
          les amarra un hilo en una pata para que no vuelen muy lejos. Nos traficaba a todos, acu&eacute;rdate.</p>
        <p>Era cu&ntilde;ado de Nachito Rivero, aquel que se volvi&oacute; tonto a los pocos d&iacute;as de casado y que
          In&eacute;s, su mujer, para mantenerse tuvo que poner un puesto de tepeche en la garita del camino real, mientras
          Nachito se viv&iacute;a tocando canciones todas refinadas en una mandolina que le prestaban en la peluquer&iacute;a
          de don Refugio. </p>
        <p>Y nosotros &iacute;bamos con Urbano a ver a su hermana, a bebernos el tepeche que siempre le qued&aacute;bamos a
          deber y que nunca le pag&aacute;bamos, porque nunca ten&iacute;amos dinero. Despu&eacute;s hasta se qued&oacute;
          sin amigos, porque todos al verlo, le sac&aacute;bamos la vuelta para que no fuera a cobrarnos. </p>
        <p>Quiz&aacute; entonces se vio malo, o quiz&aacute; ya era de nacimiento. </p>
        <p>Lo expulsaron de la escuela antes del quinto a&ntilde;o, porque lo encontraron con su prima <i>la Arremangada</i>
          jugando a marido y mujer detr&aacute;s de los lavaderos, metidos en un aljibe seco. Lo sacaron de las orejas por la
          puerta grande entre el ris&oacute;n de todos, pas&aacute;ndolo por una fila de muchachos y muchachas para
          avergonzarlo. Y &eacute;l pas&oacute; por all&iacute;, con la cara levantada, amenaz&aacute;ndolos a todos con la
          mano y como diciendo: &ldquo;Ya me las pagar&aacute;n caro&rdquo;. </p>
        <p>Y despu&eacute;s a ella, que sali&oacute; haciendo pucheros y con la mirada raspando los ladrillos, hasta que ya
          en la puerta solt&oacute; el llanto; un chillido que se estuvo oyendo toda la tarde como si fuera un aullido de
          coyote.</p>
        <p>S&oacute;lo que te falle mucho la memoria, no te has de acordar de eso. </p>
        <p>Dicen que su t&iacute;o Fidencio, el del molino, le arrim&oacute; una paliza que por poco y lo deja
          par&aacute;lisis, y que &eacute;l, de coraje, se fue del pueblo.</p>
        <p>Lo cierto es que no lo volvimos a ver sino cuando apareci&oacute; de vuelta aqu&iacute; convertido en
          polic&iacute;a. Siempre estaba en la plaza de armas, sentado en la banca con la carabina entre las piernas y
          mirando con mucho odio a todos. No hablaba con nadie. No saludaba a nadie. Y si uno lo miraba, &eacute;l se
          hac&iacute;a el desentendido como si no conociera a la gente. </p>
        <p>Fue entonces cuando mat&oacute; a su cu&ntilde;ado, el de la mandolina. Al Nachito se le ocurri&oacute; ir a darle
          una serenata, ya de noche, poquito despu&eacute;s de las ocho y cuando las campanas todav&iacute;a estaban tocando
          el toque de &Aacute;nimas. Entonces se oyeron los gritos y la gente que estaba en la Iglesia rezando el rosario
          sali&oacute; a la carrera y all&iacute; los vieron: al Nachito defendi&eacute;ndose patas arriba con la mandolina y
          al Urbano mand&aacute;ndole un culatazo tras otro con el m&aacute;user, sin o&iacute;r lo que le gritaba la gente,
          rabioso, como perro del mal. Hasta que un fulano que no era ni de por aqu&iacute; se desprendi&oacute; de la
          muchedumbre y fue y le quit&oacute; la carabina y le dio con ella en la espalda, dobl&aacute;ndolo sobre la banca
          del jard&iacute;n donde se estuvo tendido. </p>
        <p>All&iacute; lo dejaron pasar la noche. Cuando amaneci&oacute; se fue. Dicen que antes estuvo en el curato y que
          hasta le pidi&oacute; la bendici&oacute;n al padre cura, pero que &eacute;l no se la dio. </p>
        <p>Lo detuvieron en el camino. Iba cojeando, y mientras se sent&oacute; a descansar llegaron a &eacute;l. No se
          opuso. Dicen que &eacute;l mismo se amarr&oacute; la soga en el pescuezo y que hasta escogi&oacute; el &aacute;rbol
          que m&aacute;s le gustaba para que lo ahorcaran. </p>
        <p>T&uacute; te debes acordar de &eacute;l, pues fuimos compa&ntilde;eros de escuela y lo conociste como yo.</p>
        <p align="center" class="fin">FIN</p>
      </section>
    `
  }
}

window.customElements.define('c-acuerdate', CAcuerdate);
