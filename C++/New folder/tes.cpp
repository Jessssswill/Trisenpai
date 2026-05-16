#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<windows.h>
#include<ctype.h>

struct data{ 
    char restaurantName[105];
    char city[105];
    int costForTwo;
    char currency[105];
    int priceRange;
    float rating;
    char ratingText[25];
    int votes;
}list[5005], temp;

char datList[9][20]={"No.","Restaurant Name", "City", "Cost For Two", "Currency", "Price Range", "Rating", "Rating Text", "Votes"};
//index list        // 0        1               2           3               4           5           6           7           8

int srcClm(char clm[100]){ 
    for(int i=1;i<9;i++){ 
        if(strcmp(clm,datList[i])==0)return i;
    }
    return 0; //if not, return 0
}

int srchDatRestaurantName(char src[100], int i){
    for(int j=0;j<i;j++){ 
        if(strcmp(src, list[j].restaurantName)==0)return 1; 
    }
    return 0; 
}

int srchDatCity(char src[100], int i){
    for(int j=0;j<i;j++){ 
        if(strcmp(src, list[j].city)==0)return 1; 
    }
    return 0;
}

int srchDatCost(int min, int max, int i){
    for(int j=0;j<i;j++){ 
        if(list[j].costForTwo>=min && list[j].costForTwo<=max)return 1; 
    }
    return 0; 
}

int srchDatCurrency(char src[100], int i){
    for(int j=0;j<i;j++){
        if(strcmp(src, list[j].currency)==0) return 1;
    }
    return 0;
}

int srchDatPriceRange(int priceRange, int i){
    for(int j=0;j<i;j++){
        if(list[j].priceRange == priceRange) return 1;
    }
    return 0;
}

int srchDatRating(float rating, int i){
    for(int j=0;j<i;j++){ 
        if(list[j].rating == rating) return 1; 
    }
    return 0; 
}

int srchDatRatingText(char src[100], int i){
    for(int j=0;j<i;j++){ 
        if(strcmp(src, list[j].ratingText)==0) return 1; 
    }
    return 0;
}

int srchDatVotes(int votes, int i){
    for(int j=0;j<i;j++){ 
        if(list[j].votes == votes) return 1; 
    }
    return 0; 
}

int checkFileName(char FN[100]){
    for(int j=0;j<strlen(FN);j++){ 
        if(!isalpha(FN[j]) && !isdigit(FN[j]) && FN[j]!='-' && FN[j]!='_'){ 
            return 1; 
        }
    }
    return 0;
}

//function to display table
void printTable1(int row, int i){ //print table
    printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
    printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n", datList[0], datList[1], datList[2], datList[3], datList[4],datList[5],datList[6],datList[7],datList[8]);
    printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
    for(int j=0;j<row && j<i;j++){ 
        printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n", j+1, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
    }
    printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
}

//If u choose 4
void exportData(int i, char head[1005]){
    char flName[100];
    printf("Notes : File name can't include space\n");
    printf("\tThe only special characters can be use are '-' and '_'\n");
    printf("\tFile name can contains alpabeth and number\n");
    printf("\tFile name contains only 4-40 characters\n");
    printf("\tData type will be added automatically (.csv)\n");
    printf("\tData that will be exported can be seen at menu 1\n\n");
    do{
        printf("Input file name : "); 
        // FIX: scanf handling
        scanf("%s", flName); getchar();
        
        if(checkFileName(flName) || strlen(flName)>40 || strlen(flName)<4){ 
            printf("File name invalid. Reinput.\n");
        }
    }while(checkFileName(flName) || strlen(flName)>40 || strlen(flName)<4); 
    strcat(flName,".csv"); 
    FILE *fsv=fopen(flName, "w"); 
    fprintf(fsv, "%s\n", head); 
    for(int j=0;j<i;j++){ 
        fprintf(fsv, "%s,%s,%d,%s,%d,%.1f,%s,%d\n", list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
    }
    fclose(fsv);
    printf("Data successfully written to file %s!\n", flName);
    system("pause"); 
}

//If u choose 3
void sortData(int i){
    char clm[100];
    char srch[20];
    int l;
    int shw = 10;
    printf("Notes : Use - for spaces\n\tCase sensitive\n\tDisplay only first 10 data, the full data can be seen at menu 1\n\n");
    do{
        printf("Choose column (Restaurant Name/City/Cost For Two/Currency/Price Range/Rating/Rating Text/Votes): "); 
        scanf("%[^\n]", clm); getchar();
        l=srcClm(clm); 
        if(!l)printf("Invalid column. Reinput.\n");
    }while(!l); 
    
    do{
        printf("Sort ascending or descending (Ascending/Descending) ? ");
        scanf("%s", srch); getchar();
        if(strcmp(srch, "Ascending")!=0 && strcmp(srch, "Descending")!=0)printf("Invalid sort type. Reinput.\n");
    }while(strcmp(srch, "Ascending")!=0 && strcmp(srch, "Descending")!=0); 

    if(l==1){ // restaurant name
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].restaurantName[z]!='\0' && tolower(list[k].restaurantName[z])==tolower(list[k+1].restaurantName[z])) 
                        z++;
                    if(tolower(list[k].restaurantName[z])>tolower(list[k+1].restaurantName[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].restaurantName[z]!='\0' && tolower(list[k].restaurantName[z])==tolower(list[k+1].restaurantName[z])) z++;
                    if(tolower(list[k].restaurantName[z])<tolower(list[k+1].restaurantName[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==2){ // city
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].city[z]!='\0' && tolower(list[k].city[z])==tolower(list[k+1].city[z])){
                        z++;
                    }
                    if(tolower(list[k].city[z])>tolower(list[k+1].city[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].city[z]!='\0' && tolower(list[k].city[z])==tolower(list[k+1].city[z])){
                        z++;
                    }   
                    if(tolower(list[k].city[z])<tolower(list[k+1].city[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==3){ // cost for two
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].costForTwo > list[k+1].costForTwo){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].costForTwo < list[k+1].costForTwo){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==4){ // currency
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].currency[z]!='\0' && tolower(list[k].currency[z])==tolower(list[k+1].currency[z])){
                        z++;
                    }
                    if(tolower(list[k].currency[z])>tolower(list[k+1].currency[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].currency[z]!='\0' && tolower(list[k].currency[z])==tolower(list[k+1].currency[z])){
                        z++;
                    }
                    if(tolower(list[k].currency[z])<tolower(list[k+1].currency[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==5){ // price range
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].priceRange>list[k+1].priceRange){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].priceRange<list[k+1].priceRange){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==6){ // rating
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].rating > list[k+1].rating){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].rating < list[k+1].rating){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==7){ // rating text
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].ratingText[z]!='\0' && tolower(list[k].ratingText[z])==tolower(list[k+1].ratingText[z])){
                        z++;
                    }
                    if(tolower(list[k].ratingText[z])>tolower(list[k+1].ratingText[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    int z=0;
                    while(list[k].ratingText[z]!='\0' && tolower(list[k].ratingText[z])==tolower(list[k+1].ratingText[z])) z++;
                    if(tolower(list[k].ratingText[z])<tolower(list[k+1].ratingText[z])){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }else if(l==8){ // votes
        if(strcmp(srch,"Ascending")==0){
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].votes>list[k+1].votes){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }else{
            for(int j=0;j<i;j++){
                for(int k=0;k<i-j-1;k++){
                    if(list[k].votes<list[k+1].votes){
                        temp=list[k];
                        list[k]=list[k+1];
                        list[k+1]=temp;
                    }
                }
            }
        }
    }
    printTable1(shw, i);
    system("pause");
}

//If u choose 2
void searchData(int i){
    char clm[100];
    char srchStr[105];
    int srchInt;
    float srchFloat;
    int l;
    int k = 0;
    printf("Notes : Don't use space, use '-'\n\tCase sensitive\n\tData loading may take some time\n\n");
    do{
        printf("Choose column (Restaurant Name/City/Cost For Two/Currency/Price Range/Rating/Rating Text/Votes): "); 
        scanf("%[^\n]", clm); getchar();
        l=srcClm(clm); 
        if(!l)printf("Invalid column. Reinput.\n");
    }while(!l); 
    
    // 1. Restaurant Name
    if(l==1){ 
        printf("What data do you want to find? ");
        // FIX: menggunakan %[^\n] untuk nama dengan spasi
        scanf("%[^\n]", srchStr); getchar();
        int m=srchDatRestaurantName(srchStr, i); 
        if(m){ 
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n", datList[0], datList[1], datList[2], datList[3], datList[4],datList[5],datList[6],datList[7],datList[8]); //printdata
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            for(int j=0;j<i;j++){ 
                if(strcmp(srchStr, list[j].restaurantName)==0){ 
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n", k+1, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                    k++;
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");            
        }else{ 
            printf("Data not found\n");
        }
    }else if(l==2){
        printf("Input city: ");
        scanf("%[^\n]", srchStr); getchar();

        if(srchDatCity(srchStr,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(strcmp(srchStr,list[j].city)==0){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n", ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 3. Cost For Two (Range)
    else if(l==3){
        int min,max;
        printf("Enter minimum cost: "); scanf("%d",&min);
        printf("Enter maximum cost: "); scanf("%d",&max); getchar();

        if(srchDatCost(min,max,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(list[j].costForTwo>=min && list[j].costForTwo<=max){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 4. Currency
    else if(l==4){
        printf("Input currency: ");
        scanf("%[^\n]", srchStr); getchar();

        if(srchDatCurrency(srchStr,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(strcmp(srchStr,list[j].currency)==0){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 5. Price Range
    else if(l==5){
        printf("Input price range: ");
        scanf("%d",&srchInt); getchar();

        if(srchDatPriceRange(srchInt,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(list[j].priceRange==srchInt){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 6. Rating
    else if(l==6){
        printf("Input rating: ");
        scanf("%f",&srchFloat); getchar();

        if(srchDatRating(srchFloat,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(list[j].rating==srchFloat){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 7. Rating Text
    else if(l==7){
        printf("Input rating text: ");
        scanf("%[^\n]", srchStr); getchar();

        if(srchDatRatingText(srchStr,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0],datList[1],datList[2],datList[3],datList[4],
                datList[5],datList[6],datList[7],datList[8]);
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");

            for(int j=0;j<i;j++){
                if(strcmp(srchStr,list[j].ratingText)==0){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        ++k, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    // 8. Votes
    else if(l==8){
        printf("Input votes: ");
        scanf("%d",&srchInt); getchar();

        if(srchDatVotes(srchInt,i)){
            printf("Data found\n");
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            printf("||%-4s|%-30s|%-25s|%-15s|%-10s|%-12s|%-8s|%-15s|%-10s||\n",
                datList[0], datList[1], datList[2], datList[3], datList[4], datList[5], datList[6], datList[7], datList[8]);
            
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
            for(int j=0;j<i;j++){
                if(list[j].votes==srchInt){
                    printf("||%-4d|%-30s|%-25s|%-15d|%-10s|%-12d|%-8.1f|%-15s|%-10d||\n",
                        j+1, list[j].restaurantName, list[j].city, list[j].costForTwo, list[j].currency, list[j].priceRange, list[j].rating, list[j].ratingText, list[j].votes);
                }
            }
            printf("----------------------------------------------------------------------------------------------------------------------------------------\n");
        }else{
            printf("Data not found\n");
        }
    }

    system("pause");
}

void displayData(int i){
    int row;
    do{
        printf("Number of rows : ");
        scanf("%d", &row); getchar();
        if(row<=0)printf("Invalid row number. Reinput row number.\n");
    }while(row<=0); 
    printTable1(row, i);
    system("pause"); 
}


int main(){
    int chs;
    FILE *f=fopen("restaurant.csv", "r");
    if(!f){
        printf("File 'restaurant.csv' not found!\nMake sure the file is in the same folder as the .cpp/.exe file.\n");
        system("pause");
        return 1;
    }
    char head[1005]; 
    // FIX: cek header
    if(fscanf(f, "%[^\n]\n", head) == 0){
        fclose(f);
    }
    
    int i=0;
    while(fscanf(f,"%[^,],%[^,],%d,%[^,],%d,%f,%[^,],%d\n", list[i].restaurantName, list[i].city, &list[i].costForTwo, list[i].currency, &list[i].priceRange, &list[i].rating, list[i].ratingText, &list[i].votes) == 8){
        i++;
    }
    fclose(f); 
    do{
        puts("What do you want to do?");
        puts("1. Display Data");
        puts("2. Search Data");
        puts("3. Sort Data");
        puts("4. Export Data");
        puts("5. Exit");
        printf("Your choice : ");
        scanf("%d", &chs); getchar();
        switch(chs){
            case 1:{
                displayData(i);
                system("cls"); 
                break;
            }
            case 2:{
                searchData(i);
                system("cls"); 
                break;
            }
            case 3:{
                sortData(i);
                system("cls"); 
                break;
            }
            case 4:{
                exportData(i, head);
                system("cls"); 
                break;
            }
            case 5:{
                system("cls"); 
                char endtxt[100]={"\n\n\n\nTranslate : Thank you for using this app \n\n\n\n"};
                for(int i=0;i<strlen(endtxt);i++){ 
                    printf("%c", endtxt[i]);
                    Sleep(100); 
                } getchar();
                break;
            }           
            default:{
                printf("/n/n/nInvalid number! Reinput number\n");
                system("pause"); 
                system("cls");
                break;
            }
        }       
    }while(chs!=5); 
    
    return 0; 
}