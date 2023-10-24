let chessPiece = 'bispo';

switch(chessPiece.toLowerCase()){
  case 'rei':
    console.log('Rei -> Uma casa para qualquer direcao.');
    break;
    case 'rainha':
      console.log('Rainha -> Se move para qualquer direcao');
      break;
      case 'torre':
        console.log('Torre -> Se move em linha reta');
        break;
        case 'cavalo':
          console.log('Cavalo -> Se move em L');
          break;
          case 'bispo':
            console.log('Bispo -> Diagonais.');
            break;
            case 'peao':
              console.log('"Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.');
              break;
              default:
                console.log('Erro, peça inválida!');

}