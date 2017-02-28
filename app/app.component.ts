import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<div>
                <header><h1>Portfolio monitor</h1>
                      <div id="menu">
                        <div style="width:15%;border-right:1px solid #3498db;float:left">
                        <label for="showblock"><span class="glyphicon glyphicon-menu-hamburger">Menu</span></label>
                        </div>

                        <div style="float:left;width:25%;padding-left:5px">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span> User
                        </div>
                        <div style="float:left;width:60%;text-align:right;cursor:pointer" data-toggle="modal" data-target="#myModal1">
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                        </div>
                      </div>
                </header>



                    <input type="checkbox" id="showblock" />

                    <nav>

                        <a  routerLink="/portfolio" routerLinkActive="active"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>Portfolio</a>
                        <a  routerLink="/grafikon" routerLinkActive="active"><span class="glyphicon glyphicon-stats" aria-hidden="true"></span>Grafikon</a>
                    </nav>
                <main id="content">
                <router-outlet></router-outlet>
                </main>
            </div>

            <!-- Modal -->
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
})
export class AppComponent  { name = 'Angular';

}
