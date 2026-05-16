#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main () {
	char A[105], B[105];
	scanf("%s", A);
	scanf("%s", B);
	
	int lenA = strlen(A), lenB = strlen(B);
	
	
	// cari prefix
	char prefix[105] = "";
	int p = 0;
	while (p < lenA && p < lenB && A[p] == B[p]) { // bandingin dari kiri (decrement)
		prefix[p] = A[p];
		p++;
	}
	
	// cari suffix 
	char suffix[105] = "";
	int a = lenA - 1, b = lenB - 1, s = 0;
	char temp[105];
	while(a >= 0 && b >= 0 && A[a] == B[b]) { // bandingin dari kanan (increment)
	    temp[s++] = A[a];
	    a--;
	    b--;
	}
	
	// balik suffix
	for (int i = 0; i < s; i++) {
		suffix[i] = temp[s - i - 1];
	}
	
	// jika dua-duanya kosong
	if (strlen(prefix) == 0 && strlen(suffix) == 0) {
		printf("No Output");
		return 0;
	}
	
	char result[300];
	strcpy(result, prefix);
	strcat(result, suffix);
	
	// invert
	
	for (int i = 0; result[i]; i++) {
		if (islower(result[i])) result[i] = toupper(result[i]);
		else if (isupper(result[i])) result[i] = tolower(result[i]);
	}
	
	printf("%s", result);
	return 0;
}
