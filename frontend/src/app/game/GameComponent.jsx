import React, { Component } from "react";
import './GameComponent.css';
import recycle from './recycle.png';


var correctItems = 0;
var incorrectItems = 0;
var allCount = 0;
var data = ["papercup","T-shirt","glass","iPhone","battery","cardboard box","plastic box","banana peel","books","water bottle", "diapers","paper towels", "pizza box", "tires", "yogurt cups"]
var indicators = [1,1,1,0,0,1,0,1,1,1,0,0,0,0,0];
var index = 0;



var score= 0;





class GameComponent extends Component {
  constructor(props) {
    super(props);
  }

  submit() {
    if (this.props.sanity) {
      this.props.setGamescore(correctItems);
    } else {
      this.props.setGamescore(incorrectItems);
    }
    this.props.setGameover(true);
    return this.props.history.push("/");
  }

  componentDidMount() {

    console.log(this.props.sanity)

    var addEvent = (function () {
      if (document.addEventListener) {
        return function (el, type, fn) {
          if (el && el.nodeName || el === window) {
             el.addEventListener(type, fn, false);
          } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
              addEvent(el[i], type, fn);
            }
          }
        };
      } else {
        return function (el, type, fn) {
          if (el && el.nodeName || el === window) {
              el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
          } else if (el && el.length) {
            for (var i = 0; i < el.length; i++) {
                addEvent(el[i], type, fn);
            }
          }
        };
      }
    })();

    (function () {

      var pre = document.createElement('pre');
      pre.id = "view-source";

      addEvent(window, 'click', function (event) {
        if (event.target.hash == '#view-source') {
          if (!document.getElementById('view-source')) {
            pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
            document.body.appendChild(pre);
          }
          document.body.className = 'view-source';

          var sourceTimer = setInterval(function () {
            if (window.location.hash != '#view-source') {
              clearInterval(sourceTimer);
              document.body.className = '';
            }
          }, 200);
        }
      });

    })();


    var eat = ['', '', '', ''];
    var yum = document.createElement('p');
    var msie = /*@cc_on!@*/0;
    yum.style.opacity = 1;

    var links = document.querySelectorAll('li > a'), el = null;
    for (var i = 0; i < links.length; i++) {
      el = links[i];

      el.setAttribute('draggable', 'true');

      addEvent(el, 'dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
        e.dataTransfer.setData('Text', this.id); // required otherwise doesn't work
      });
    }

      var bin = document.querySelector('#bin');
      var bin2 = document.querySelector('#bin2');

      addEvent(bin, 'dragover', function (e) {
          if (e.preventDefault) e.preventDefault(); // allows us to drop
          this.className = 'over';
          e.dataTransfer.dropEffect = 'copy';
          return false;
      });

      addEvent(bin2, 'dragover', function (e) {
        if (e.preventDefault) e.preventDefault(); // allows us to drop
        this.className = 'over';
        e.dataTransfer.dropEffect = 'copy';
        return false;
    });

      // to get IE to work
      addEvent(bin, 'dragenter', function (e) {
          this.className = 'over';
          return false;
      });

      // to get IE to work
      addEvent(bin2, 'dragenter', function (e) {
        this.className = 'over';
        return false;
    });

      addEvent(bin, 'dragleave', function () {
          this.className = '';
      });

      addEvent(bin2, 'dragleave', function () {
        this.className = '';
    });

      addEvent(bin, 'drop', function (e) {

          if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???

          var el = document.getElementById(e.dataTransfer.getData('Text'));

          el.parentNode.removeChild(el);
          if(indicators[index]==1) {
              correctItems = correctItems + 1;
          }
          index++;

          console.log("Items in the left"+correctItems)
          // stupid nom text + fade effect
          bin2.className = '';
          yum.innerHTML = eat[parseInt(Math.random() * eat.length)];

          var y = yum.cloneNode(true);
          bin.appendChild(y);
          setTimeout(function () {
              var t = setInterval(function () {
                  if (y.style.opacity <= 0) {
                      if (msie) { // don't bother with the animation
                          y.style.display = 'none';
                      }
                      clearInterval(t);
                  } else {
                      y.style.opacity -= 0.1;
                  }
              }, 50);
          }, 250);




          if(correctItems === 5){
             

              alert("hey!")
          }
          console.log("we came to checkNumber, correctItems=="+correctItems)

          return false;
      })
      
      addEvent(bin2, 'drop', function (e) {
        if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???

        var el = document.getElementById(e.dataTransfer.getData('Text'));

        el.parentNode.removeChild(el);
          if(indicators[index]==0) {
              incorrectItems= incorrectItems + 1;
          }
          index++;
          console.log("Items in the right"+incorrectItems)

        // stupid nom text + fade effect
        bin2.className = '';
        yum.innerHTML = eat[parseInt(Math.random() * eat.length)];

        var y = yum.cloneNode(true);
        bin.appendChild(y);

        setTimeout(function () {
            var t = setInterval(function () {
                if (y.style.opacity <= 0) {
                    if (msie) { // don't bother with the animation
                        y.style.display = 'none';
                    }
                    clearInterval(t);
                } else {
                    y.style.opacity -= 0.1;
                }
            }, 50);
        }, 250);

        return false;
    });
}

  
  /*function checkNumber(){
      if( correctItems === 5){
          alert("hey!")
      }
      console.log("we came to checkNumber, correctItems=="+correctItems)
  };*/
    renderList = data =>{
        if(data == undefined){

        }else {
            return (
                <ul>
                    {data.map((item,index) =>
                        <li key={index}>
                            {
                                <a draggable="true" href="" id="one">{item}</a>
                            }
                        </li>
                    )}
                </ul>
            );
        }
    };


render() {
    return (
      <div class="holder">
          {this.props.sanity && <h1>Save the Earth!</h1>}
          {!this.props.sanity && <h1>Destroy the World!</h1>}
          {this.props.sanity && <h2>Score: {correctItems}</h2>}
          {!this.props.sanity && <h2>Score: {incorrectItems}</h2>}
          <div className="game-div">
          <div id="bin">
              <img alt="" className="recycle-img" src={recycle} />
          </div>
          <ul>
              {this.renderList(data)}
          </ul>
          <div id="bin2">
              <img alt="" src="data:image/png;base64,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" />
          </div>
          </div>
      </div>
    );
  }
}

export default GameComponent;
