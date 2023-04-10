const useGenres = (selectedGenres)=>{
    if(selectedGenres < 1) return '';

    const GenreIds = selectedGenres.map(g=>{return g.id})
    return GenreIds.reduce((acc, curr)=>{
        return acc + ','+ curr;
    }) 
}

export default useGenres;
