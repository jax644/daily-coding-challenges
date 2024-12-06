function nexus(users) {
    let ranks = Object.keys(users)
    let honors = Object.values(users)
    let difs = ranks.map((rank,i) => honors[i] - rank)
    
    for (let i=0; i<ranks.length; i++) {
      difs.push(honors[i]-ranks[i])
    }
    
    let smallestDif = Math.min(...difs.map((n)=>Math.abs(n)))

    let posNexIndexes = difs.map((dif,i) => dif[i] == smallestDif ? i : -1).filter((i) => i!=-1)
    let posNexIndexes = []
  
    for (i=0;i<difs.length;i++) {
      if (Math.abs(difs[i]) == smallestDif) {
        posNexIndexes.push(i)
      }
    }
   
    let posNexuses = []
    let nexus

    if (posNexIndexes.length == 1) {
      nexus = Number(ranks[Number(posNexIndexes)])
    }
    else if (posNexIndexes.length > 1) {
      for (i=0;i<posNexIndexes.length;i++) {
        posNexuses.push(ranks[posNexIndexes[i]])
      }
      nexus = posNexuses.reduce((n)=> Math.min(n))
    }
    return nexus
  }


  //// REFACTORED SOLUTION

  function nexus(users) {
    let ranks = Object.keys(users)
    let honors = Object.values(users)
    let difs = ranks.map((rank,i) => Math.abs(honors[i] - rank))
    let smallestDif = Math.min(...difs)
    let posNexIndexes = difs
    .map((dif,i) => dif == smallestDif ? i : -1)
    .filter((i) => i !=-1)
  
    let nexus
    let posNexuses = []
    
    if (posNexIndexes.length == 1) {
      nexus = Number(ranks[Number(posNexIndexes)])
    }
    else if (posNexIndexes.length > 1) {
      posNexuses = posNexIndexes.map((x) => ranks[x])
      nexus = posNexuses.reduce((n)=> Math.min(n))
      }
    
    return nexus
  }