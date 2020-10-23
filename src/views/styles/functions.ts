export function textEllipsis(line: string){
  return (
    `display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;`
  );
}

export function circle(size: string){
  return (`
    display: inline-flex;
    width: ${size};
    height: ${size};
    border-radius: 50%;
  `);
}

export function percentage(size: string, col: number){
  return (`
    width: calc((${size} * 12) / ${col});
  `);
}

export function scrollbarVertical(width: string, color: string, bg: string){
  return (`
    &::-webkit-scrollbar-track{
      border-radius: calc(${width} / 2);
      background-color: ${bg};
    }

    &::-webkit-scrollbar{
      width: ${width};
      background-color: ${bg};
    }

    &::-webkit-scrollbar-thumb{
      border-radius: calc(${width} / 2);
      background-color: ${color};
    }
  `);
}
