import java.util.*;

public class intersectionTwoArray {
    public static void main(String[] args ){

        int nums1[] = {5,6};
        int nums2[] = {6,7,7,8,5,5};

        Arrays.sort(nums1);
        Arrays.sort(nums2);
        
        int n = nums1.length;
        int m = nums2.length;

        int i = 0;
        int j = 0;
        int cnt = 0;

        int[] ans = new int[Math.min(n,m)];

        while (i<n && j<m) {
            if (nums1[i] == nums2[j]) {

                if (cnt == 0 || ans[cnt-1] != nums1[i]) {
                    ans[cnt] = nums1[i];
                    cnt++;
                }

                i++;
                j++;

            }
            else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                i++;
            }
        }

        return Arrays.copyOf(ans, cnt);

    }
}

