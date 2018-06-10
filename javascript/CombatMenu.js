function CombatMenu(CombatMenuImg,btnAtkImg,btnItmImg,menuPosWidth, menuPosHeight) {
    var CombatMenu = game.add.image(menuPosWidth, menuPosHeight, CombatMenuImg)
    var btnAtk = game.add.button(menuPosWidth + 18, menuPosHeight + 28, btnAtkImg, ATKClick, this, 1, 0, 2);
    var btnItm = game.add.button(menuPosWidth + 63, menuPosHeight + 28, btnItmImg, ITMClick, this, 1, 0, 2);
    CombatMenu.fixedToCamera = true;
    btnAtk.fixedToCamera = true;
    btnItm.fixedToCamera = true;
    button.onInputOut.add(out, this);
    button.onInputOver.add(over, this);
    button.onInputUp.add(up, this);
    button.onInputOut.add(out, this);
    button.onInputOver.add(over, this);
    button.onInputUp.add(up, this);   
}
function up() {
    console.log('button up', arguments);
}
function over() {
    console.log('button over');
}
function out() {
    console.log('button out');
}

function ATKClick() {
}
function ITMClick() {

}