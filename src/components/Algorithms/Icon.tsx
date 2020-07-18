import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

interface ITopLayerIcon {
    className?: string;
    faces: string;
    edges: string;
}
const colors: any = {
  R: 'red',
  G: 'green',
  B: 'blue',
  Y: 'yellow',
  W: 'white',
  O: 'orange',
  N: 'gray',
};

const TopLayerIcon: React.FC<ITopLayerIcon> = ({ edges, faces, ...other }) => {
  const faceList = faces.split(' ');
  const edgeList = edges.split(' ');

  const getColor = (list: string[], loc: number): string => {
    return colors[list[loc]];
  };

  return (
    <SvgIcon viewBox="56.86447197643844 36.70497255838907 248.27105604712312 248.59005488322194" {...other}>
      <defs>
        <path d="M125 60C133.28 60 140 66.72 140 75C140 84 140 96 140 105C140 113.28 133.28 120 125 120C116 120 104 120 95 120C86.72 120 80 113.28 80 105C80 96 80 84 80 75C80 66.72 86.72 60 95 60C104 60 116 60 125 60Z" id="agS1u9Zu8"></path>
        <path d="M195 60C203.28 60 210 66.72 210 75C210 84 210 96 210 105C210 113.28 203.28 120 195 120C186 120 174 120 165 120C156.72 120 150 113.28 150 105C150 96 150 84 150 75C150 66.72 156.72 60 165 60C174 60 186 60 195 60Z" id="adzGIBtEY"></path>
        <path d="M265 61.56C273.28 61.56 280 68.27 280 76.56C280 85.56 280 97.56 280 106.56C280 114.84 273.28 121.56 265 121.56C256 121.56 244 121.56 235 121.56C226.72 121.56 220 114.84 220 106.56C220 97.56 220 85.56 220 76.56C220 68.27 226.72 61.56 235 61.56C244 61.56 256 61.56 265 61.56Z" id="frhbG2g4A"></path>
        <path d="M125 130C133.28 130 140 136.72 140 145C140 154 140 166 140 175C140 183.28 133.28 190 125 190C116 190 104 190 95 190C86.72 190 80 183.28 80 175C80 166 80 154 80 145C80 136.72 86.72 130 95 130C104 130 116 130 125 130Z" id="b2aB9gMnAz"></path>
        <path d="M195 130C203.28 130 210 136.72 210 145C210 154 210 166 210 175C210 183.28 203.28 190 195 190C186 190 174 190 165 190C156.72 190 150 183.28 150 175C150 166 150 154 150 145C150 136.72 156.72 130 165 130C174 130 186 130 195 130Z" id="e1bJWU3iH"></path>
        <path d="M265 130C273.28 130 280 136.72 280 145C280 154 280 166 280 175C280 183.28 273.28 190 265 190C256 190 244 190 235 190C226.72 190 220 183.28 220 175C220 166 220 154 220 145C220 136.72 226.72 130 235 130C244 130 256 130 265 130Z" id="c2CSg606GD"></path>
        <path d="M265 200C273.28 200 280 206.72 280 215C280 224 280 236 280 245C280 253.28 273.28 260 265 260C256 260 244 260 235 260C226.72 260 220 253.28 220 245C220 236 220 224 220 215C220 206.72 226.72 200 235 200C244 200 256 200 265 200Z" id="jMScmj0LO"></path>
        <path d="M195 200C203.28 200 210 206.72 210 215C210 224 210 236 210 245C210 253.28 203.28 260 195 260C186 260 174 260 165 260C156.72 260 150 253.28 150 245C150 236 150 224 150 215C150 206.72 156.72 200 165 200C174 200 186 200 195 200Z" id="a6JWUkdYd"></path>
        <path d="M125 200C133.28 200 140 206.72 140 215C140 224 140 236 140 245C140 253.28 133.28 260 125 260C116 260 104 260 95 260C86.72 260 80 253.28 80 245C80 236 80 224 80 215C80 206.72 86.72 200 95 200C104 200 116 200 125 200Z" id="e6R0JIRr1b"></path>
        <path d="M136.98 37.98C138.66 37.99 140.01 39.35 140.01 41.02C140 42.84 139.99 45.27 139.99 47.09C139.98 48.76 138.62 50.12 136.95 50.11C125.55 50.08 94.4 49.98 83.01 49.95C81.34 49.94 79.98 48.58 79.99 46.91C79.99 45.09 80 42.66 80.01 40.84C80.01 39.17 81.37 37.81 83.05 37.82C94.44 37.85 125.59 37.95 136.98 37.98Z" id="e1TnK4X7K7"></path>
        <path d="M206.98 37.87C208.65 37.87 210.01 39.24 210 40.91C209.99 42.73 209.99 45.16 209.98 46.98C209.98 48.65 208.61 50.01 206.94 50C195.55 49.97 164.4 49.87 153.01 49.84C151.33 49.83 149.98 48.47 149.98 46.79C149.99 44.97 149.99 42.55 150 40.73C150.01 39.05 151.37 37.7 153.04 37.7C164.44 37.74 195.58 37.83 206.98 37.87Z" id="i4AKRAZyz"></path>
        <path d="M276.98 37.87C278.65 37.87 280.01 39.24 280 40.91C279.99 42.73 279.99 45.16 279.98 46.98C279.98 48.65 278.61 50.01 276.94 50C265.55 49.97 234.4 49.87 223.01 49.84C221.33 49.83 219.98 48.47 219.98 46.79C219.99 44.97 219.99 42.55 220 40.73C220.01 39.05 221.37 37.7 223.04 37.7C234.44 37.74 265.58 37.83 276.98 37.87Z" id="aFJonmqnO"></path>
        <path d="M136.99 270.16C138.67 270.17 140.02 271.53 140.02 273.21C140.01 275.03 140.01 277.45 140 279.27C139.99 280.95 138.63 282.3 136.96 282.3C125.56 282.26 94.42 282.17 83.02 282.13C81.35 282.13 79.99 280.76 80 279.09C80.01 277.27 80.01 274.84 80.02 273.02C80.02 271.35 81.39 269.99 83.06 270C94.45 270.03 125.6 270.13 136.99 270.16Z" id="b3JYQE08vX"></path>
        <path d="M206.99 270.16C208.67 270.17 210.02 271.53 210.02 273.21C210.01 275.03 210.01 277.45 210 279.27C209.99 280.95 208.63 282.3 206.96 282.3C195.56 282.26 164.42 282.17 153.02 282.13C151.35 282.13 149.99 280.76 150 279.09C150.01 277.27 150.01 274.84 150.02 273.02C150.02 271.35 151.39 269.99 153.06 270C164.45 270.03 195.6 270.13 206.99 270.16Z" id="d3cmwpaTTr"></path>
        <path d="M276.98 270.16C278.65 270.17 280.01 271.53 280 273.21C279.99 275.03 279.99 277.45 279.98 279.27C279.98 280.95 278.61 282.3 276.94 282.3C265.55 282.26 234.4 282.17 223.01 282.13C221.33 282.13 219.98 280.76 219.98 279.09C219.99 277.27 219.99 274.84 220 273.02C220.01 271.35 221.37 269.99 223.04 270C234.44 270.03 265.58 270.13 276.98 270.16Z" id="b6BMM5JhM1"></path>
        <path d="M290 63.03C290 61.36 291.36 60 293.03 60C294.85 60 297.28 60 299.1 60C300.77 60 302.13 61.36 302.13 63.03C302.13 74.43 302.13 105.57 302.14 116.97C302.14 118.64 300.78 120 299.1 120C297.28 120 294.86 120 293.04 120C291.36 120 290 118.64 290 116.97C290 105.57 290 74.43 290 63.03Z" id="b2X75oI31q"></path>
        <path d="M290 133.03C290 131.36 291.36 130 293.03 130C294.85 130 297.28 130 299.1 130C300.77 130 302.13 131.36 302.13 133.03C302.13 144.43 302.13 175.57 302.14 186.97C302.14 188.64 300.78 190 299.1 190C297.28 190 294.86 190 293.04 190C291.36 190 290 188.64 290 186.97C290 175.57 290 144.43 290 133.03Z" id="d9BDmnV5W1"></path>
        <path d="M290 203.03C290 201.36 291.36 200 293.03 200C294.85 200 297.28 200 299.1 200C300.77 200 302.13 201.36 302.13 203.03C302.13 214.43 302.13 245.57 302.14 256.97C302.14 258.64 300.78 260 299.1 260C297.28 260 294.86 260 293.04 260C291.36 260 290 258.64 290 256.97C290 245.57 290 214.43 290 203.03Z" id="a7xAZACtZ"></path>
        <path d="M57.86 63.03C57.86 61.36 59.22 60 60.9 60C62.72 60 65.14 60 66.96 60C68.64 60 70 61.36 70 63.03C70 74.43 70 105.57 70 116.97C70 118.64 68.64 120 66.97 120C65.15 120 62.72 120 60.9 120C59.23 120 57.87 118.64 57.87 116.97C57.87 105.57 57.87 74.43 57.86 63.03Z" id="c138VZUki6"></path>
        <path d="M57.86 133.03C57.86 131.36 59.22 130 60.9 130C62.72 130 65.14 130 66.96 130C68.64 130 70 131.36 70 133.03C70 144.43 70 175.57 70 186.97C70 188.64 68.64 190 66.97 190C65.15 190 62.72 190 60.9 190C59.23 190 57.87 188.64 57.87 186.97C57.87 175.57 57.87 144.43 57.86 133.03Z" id="a1jnfVaMEP"></path>
        <path d="M57.86 203.03C57.86 201.36 59.22 200 60.9 200C62.72 200 65.14 200 66.96 200C68.64 200 70 201.36 70 203.03C70 214.43 70 245.57 70 256.97C70 258.64 68.64 260 66.97 260C65.15 260 62.72 260 60.9 260C59.23 260 57.87 258.64 57.87 256.97C57.87 245.57 57.87 214.43 57.86 203.03Z" id="cP4p98bZF"></path></defs>
      <g>
        <g>
          <use href="#agS1u9Zu8" opacity="1" fill={getColor(faceList, 0)} fillOpacity="1"></use>
          <g><use href="#agS1u9Zu8" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#adzGIBtEY" opacity="1" fill={getColor(faceList, 1)} fillOpacity="1"></use>
          <g><use href="#adzGIBtEY" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>

        <g>
          <use href="#frhbG2g4A" opacity="1" fill={getColor(faceList, 2)} fillOpacity="1"></use>
          <g><use href="#frhbG2g4A" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>

        <g>
          <use href="#b2aB9gMnAz" opacity="1" fill={getColor(faceList, 3)} fillOpacity="1"></use>
          <g><use href="#b2aB9gMnAz" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#e1bJWU3iH" opacity="1" fill={getColor(faceList, 4)} fillOpacity="1"></use>
          <g><use href="#e1bJWU3iH" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#c2CSg606GD" opacity="1" fill={getColor(faceList, 5)} fillOpacity="1"></use>
          <g><use href="#c2CSg606GD" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>

        <g>
          <use href="#e6R0JIRr1b" opacity="1" fill={getColor(faceList, 6)} fillOpacity="1"></use>
          <g><use href="#e6R0JIRr1b" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>

        <g>
          <use href="#a6JWUkdYd" opacity="1" fill={getColor(faceList, 7)} fillOpacity="1"></use>
          <g><use href="#a6JWUkdYd" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#jMScmj0LO" opacity="1" fill={getColor(faceList, 8)} fillOpacity="1"></use>
          <g><use href="#jMScmj0LO" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#e1TnK4X7K7" opacity="1" fill={getColor(edgeList, 0)} fillOpacity="1"></use>
          <g><use href="#e1TnK4X7K7" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#i4AKRAZyz" opacity="1" fill={getColor(edgeList, 1)} fillOpacity="1"></use>
          <g><use href="#i4AKRAZyz" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#aFJonmqnO" opacity="1" fill={getColor(edgeList, 2)} fillOpacity="1"></use>
          <g><use href="#aFJonmqnO" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#b3JYQE08vX" opacity="1" fill={getColor(edgeList, 8)} fillOpacity="1"></use>
          <g><use href="#b3JYQE08vX" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#d3cmwpaTTr" opacity="1" fill={getColor(edgeList, 7)} fillOpacity="1"></use>
          <g><use href="#d3cmwpaTTr" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#b6BMM5JhM1" opacity="1" fill={getColor(edgeList, 6)} fillOpacity="1"></use>
          <g><use href="#b6BMM5JhM1" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#b2X75oI31q" opacity="1" fill={getColor(edgeList, 3)} fillOpacity="1"></use>
          <g><use href="#b2X75oI31q" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#d9BDmnV5W1" opacity="1" fill={getColor(edgeList, 4)} fillOpacity="1"></use>
          <g><use href="#d9BDmnV5W1" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#a7xAZACtZ" opacity="1" fill={getColor(edgeList, 5)} fillOpacity="1"></use>
          <g><use href="#a7xAZACtZ" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#c138VZUki6" opacity="1" fill={getColor(edgeList, 11)} fillOpacity="1"></use>
          <g><use href="#c138VZUki6" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#a1jnfVaMEP" opacity="1" fill={getColor(edgeList, 10)} fillOpacity="1"></use>
          <g><use href="#a1jnfVaMEP" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
        
        <g>
          <use href="#cP4p98bZF" opacity="1" fill={getColor(edgeList, 9)} fillOpacity="1"></use>
          <g><use href="#cP4p98bZF" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use></g>
        </g>
      </g>
    </SvgIcon>
  );
};

export default TopLayerIcon;