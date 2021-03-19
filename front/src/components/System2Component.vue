<template>
  <div class="row items-start q-gutter-md justify-center" style="margin-bottom: 0;">
    <div class="dof-table-config" style="">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              Configuration
              <br />minimale
            </th>
            <th>
              Configuration
              <br />recommandée
            </th>
          </tr>
          <tr>
            <td class="dof-green">
              <img
                src="images/dofus/processor.png"
                alt
              />
              Processeur
            </td>
            <td>2 GHz</td>
            <td>3 GHz</td>
          </tr>
          <tr>
            <td class="dof-green">
              <img
                src="images/dofus/ram.png"
                alt
              />
              RAM
            </td>
            <td>768 Mo</td>
            <td>2 Go</td>
          </tr>
          <tr>
            <td class="dof-green">
              <img
                src="images/dofus/disk.png"
                alt
              />
              Espace
              <br />libre
            </td>
            <td>1.5 Go</td>
            <td>3 Go</td>
          </tr>
          <tr>
            <td class="dof-green">
              <img
                src="images/dofus/os.png"
                alt
              />
              Système
              <br />d'exploitation
            </td>
            <td colspan="2">Windows Vista, Seven, 8 et 10, Mac, Linux</td>
          </tr>
          <tr>
            <td class="dof-green">
              <img
                src="images/dofus/connexion.png"
                alt
              />
              Connexion
              <br />internet
            </td>
            <td colspan="2">ADSL 512K</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>    

<style lang="css">
.dof-table-config table {
    border-spacing: 2px;
    border-collapse: separate;
    margin: 0 auto;
    position: relative;
}

.dof-table-config table th {
    background: rgba(0,0,0,0.3);
    text-align: center;
    height: 70px;
}

.dof-table-config table td {
    padding: 6px;
    width: 170px;
    color: #b4b4b2;
    font-size: 14px;
    line-height: 22px;
}

.dof-table-config table td.dof-green {
    color: #799f8d;
    text-align: left;
    font-weight: bold;
    position: relative;
    padding-left: 60px;
}

.dof-table-config table td {
    background: rgba(0,0,0,0.2);
    height: 50px;
}

.dof-table-config table th {
    padding: 6px;
    width: 170px;
    color: #b4b4b2;
    font-size: 14px;
    line-height: 22px;
}

.dof-table-config {
    background: url('/../images/dofus/bg-table-config.png') center center no-repeat transparent;
    background-size: 100% 100%;
    padding: 15px;
    display: inline-block;
    margin: 24px 0;
}

.dof-table-config table td.dof-green img {
    position: absolute;
    left: 0;
    top: 0;
}
</style>