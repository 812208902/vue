;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shangchuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 1024H0V0h1024v1024H768v-128h128v-768h-768v768H256z" fill="#4D5566" ></path>' +
    '' +
    '<path d="M426.666667 341.333333h170.666666v682.666667H426.666667z" fill="#4D5566" ></path>' +
    '' +
    '<path d="M707.84 572.16L512 376.746667l-195.84 195.413333L256 512l256-256 256 256z" fill="#4D5566" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M383.232 768L1024 127.232 896.768 0 256 640.768V768z" fill="#4E5566" ></path>' +
    '' +
    '<path d="M597.333333 0v128H128v768h768V426.666667H1024v597.333333H0V0z" fill="#4E5566" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenjianjia" viewBox="0 0 1331 1024">' +
    '' +
    '<path d="M0 1024V0h512l102.4 102.4h614.4v204.8H204.8z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M277.9136 409.6L102.4 1024h1024l204.8-614.4H277.9136z" fill="#565D6B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lishi" viewBox="0 0 1117 1024">' +
    '' +
    '<path d="M733.462939 867.467242l51.665431 77.498147A510.417223 510.417223 0 0 1 511.534313 1023.999535C228.863896 1023.999535 0 794.623639 0 511.999767S228.863896 0 511.487768 0C794.623639 0 1023.999535 229.375896 1023.999535 511.999767c0 7.819633-0.186182 15.546175-0.512 23.272717h-93.230503c0.465454-7.726542 0.651636-15.453084 0.651636-23.272717 0-231.284259-187.764278-418.9089-419.4209-418.9089C280.389691 93.090867 93.090867 280.668963 93.090867 511.999767s187.298824 418.9089 418.396901 418.908901c81.501054 0 157.602837-23.272717 222.021717-63.441426z" fill="#969EA4" ></path>' +
    '' +
    '<path d="M535.272484 279.2726H465.454334v279.272601l244.363525 146.618115 34.909075-57.250883-209.45445-124.276307zM837.817801 511.999767h279.2726l-139.6363 186.181734z" fill="#969EA4" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256 426.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M768 426.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M512 426.666667m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M341.333333 768v85.333333H0V0h1024v853.333333H682.666667V768h256V85.333333H85.333333v682.666667h256z m0 0h42.666667L512 896 640 768H682.666667v85.333333l-170.666667 170.666667-170.666667-170.666667V768z" fill="#565D6B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi2" viewBox="0 0 1121 1024">' +
    '' +
    '<path d="M341.332846 780.190824v243.809176c170.666423 0 292.571011-146.285505 390.094681-146.285505v-97.523671c-121.904588 0-195.04734 73.142753-292.571011 121.904588V780.190824H341.332846z m0 97.523671H146.773124C65.63343 877.714495 0 811.739732 0 731.770322V145.945635A145.944172 145.944172 0 0 1 146.626838 0.001463h828.268531A146.6756 146.6756 0 0 1 1121.522207 145.945635v585.824687A145.992934 145.992934 0 0 1 975.139178 877.714495H731.427527v-97.523671h244.296793c26.623962 0 48.274217-21.942826 48.274217-49.103167V146.628301C1023.998537 119.467959 1002.055711 97.525133 975.480511 97.525133H146.041696A48.761835 48.761835 0 0 0 97.52367 146.628301v584.459356A48.761835 48.761835 0 0 0 146.285505 780.190824h195.047341v97.523671z" fill="#1F2532" ></path>' +
    '' +
    '<path d="M316.951928 438.857979m-73.142752 0a73.142753 73.142753 0 1 0 146.285505 0 73.142753 73.142753 0 1 0-146.285505 0Z" fill="#1F2532" ></path>' +
    '' +
    '<path d="M560.761104 438.857979m-73.142753 0a73.142753 73.142753 0 1 0 146.285505 0 73.142753 73.142753 0 1 0-146.285505 0Z" fill="#1F2532" ></path>' +
    '' +
    '<path d="M804.570279 438.857979m-73.142752 0a73.142753 73.142753 0 1 0 146.285505 0 73.142753 73.142753 0 1 0-146.285505 0Z" fill="#1F2532" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M597.333333 0h85.333334v341.333333H597.333333z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M597.333333 256h341.333334v85.333333H597.333333z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M682.666667 0H85.333333v1024h853.333334V256H853.333333v682.666667H170.666667V85.333333h512z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M682.666667 0l256 256H810.666667L682.666667 128z" fill="#565D6B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xialajiantou" viewBox="0 0 1456 1024">' +
    '' +
    '<path d="M1342.707712 0c112.64 0 147.8656 70.4512 76.1856 159.9488L855.693312 864.256c-70.656 88.2688-184.32 89.4976-256 0L36.493312 159.744C-34.162688 71.68 1.267712 0 112.678912 0h1230.0288z" fill="#6D788E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heshang" viewBox="0 0 1228 1024">' +
    '' +
    '<path d="M0 0v1024h1228.8V204.8H614.4L512 0z" fill="#565D6B" ></path>' +
    '' +
    '<path d="M716.8 0h512v102.4H716.8z" fill="#565D6B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow_lift" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M246.784 468.309333L689.834667 25.6c24.917333-24.917333 62.464-24.917333 87.381333 0s24.917333 62.464 0 87.381333l-399.36 399.36 399.36 399.36c24.917333 24.917333 24.917333 62.464 0 87.381334-24.917333 24.917333-62.464 24.917333-87.381333 0L246.784 555.690667c-24.917333-24.917333-24.917333-62.464 0-87.381334z" fill="#393A3A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add_circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-check_circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M426 726l384-384-60-62-324 324-152-152-60 60z m86-640q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favorite" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M512 910l-62-56c-220-200-364-330-364-492C86 230 188 128 320 128c74 0 146 36 192 90C558 164 630 128 704 128c132 0 234 102 234 234 0 162-144 294-364 494z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-keyboard_arrow_right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M366 698l196-196-196-196 60-60 256 256-256 256z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M810 274L572 512l238 238-60 60L512 572 274 810l-60-60L452 512 214 274l60-60L512 452l238-238z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shopping_cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25T640 854t26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 10-6 20l-152 276q-24 44-74 44H346L308 624l-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106L128 170H42v-84z m256 682q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60T298 768z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-remove_circle_outline" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M512 854q140 0 241-101T854 512t-101-241T512 170t-241 101T170 512t101 241T512 854z m0-768q176 0 301 125T938 512t-125 301T512 938t-301-125T86 512t125-301T512 86z m-214 384h428v84h-428v-84z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-thumb_up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M982 426l-2 4h2V512q0 16-6 32l-130 300q-20 52-78 52H384q-34 0-60-26t-26-60V384q0-34 26-60L604 42 650 88Q668 106 668 132v14l-42 196H896q34 0 60 25t26 59zM42 896V384h172v512h-172z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-thumb_down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M21.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M42.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M64 0v1024" fill="" ></path>' +
    '' +
    '<path d="M85.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M106.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M128 0v1024" fill="" ></path>' +
    '' +
    '<path d="M149.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M170.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M192 0v1024" fill="" ></path>' +
    '' +
    '<path d="M213.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M234.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M256 0v1024" fill="" ></path>' +
    '' +
    '<path d="M277.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M298.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M320 0v1024" fill="" ></path>' +
    '' +
    '<path d="M341.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M362.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M384 0v1024" fill="" ></path>' +
    '' +
    '<path d="M405.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M426.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M448 0v1024" fill="" ></path>' +
    '' +
    '<path d="M469.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M490.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M512 0v1024" fill="" ></path>' +
    '' +
    '<path d="M533.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M554.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M576 0v1024" fill="" ></path>' +
    '' +
    '<path d="M597.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M618.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M640 0v1024" fill="" ></path>' +
    '' +
    '<path d="M661.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M682.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M704 0v1024" fill="" ></path>' +
    '' +
    '<path d="M725.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M746.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M768 0v1024" fill="" ></path>' +
    '' +
    '<path d="M789.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M810.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M832 0v1024" fill="" ></path>' +
    '' +
    '<path d="M853.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M874.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M896 0v1024" fill="" ></path>' +
    '' +
    '<path d="M917.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M938.666667 0v1024" fill="" ></path>' +
    '' +
    '<path d="M960 0v1024" fill="" ></path>' +
    '' +
    '<path d="M981.333333 0v1024" fill="" ></path>' +
    '' +
    '<path d="M1002.666667 0v1024M0 21.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 42.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 64h1024" fill="" ></path>' +
    '' +
    '<path d="M0 85.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 106.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 128h1024" fill="" ></path>' +
    '' +
    '<path d="M0 149.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 170.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 192h1024" fill="" ></path>' +
    '' +
    '<path d="M0 213.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 234.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 256h1024" fill="" ></path>' +
    '' +
    '<path d="M0 277.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 298.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 320h1024" fill="" ></path>' +
    '' +
    '<path d="M0 341.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 362.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 384h1024" fill="" ></path>' +
    '' +
    '<path d="M0 405.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 426.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 448h1024" fill="" ></path>' +
    '' +
    '<path d="M0 469.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 490.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 512h1024" fill="" ></path>' +
    '' +
    '<path d="M0 533.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 554.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 576h1024" fill="" ></path>' +
    '' +
    '<path d="M0 597.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 618.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 640h1024" fill="" ></path>' +
    '' +
    '<path d="M0 661.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 682.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 704h1024" fill="" ></path>' +
    '' +
    '<path d="M0 725.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 746.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 768h1024" fill="" ></path>' +
    '' +
    '<path d="M0 789.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 810.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 832h1024" fill="" ></path>' +
    '' +
    '<path d="M0 853.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 874.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 896h1024" fill="" ></path>' +
    '' +
    '<path d="M0 917.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 938.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M0 960h1024" fill="" ></path>' +
    '' +
    '<path d="M0 981.333333h1024" fill="" ></path>' +
    '' +
    '<path d="M0 1002.666667h1024" fill="" ></path>' +
    '' +
    '<path d="M810 128h172v512h-172V128zM640 128q34 0 60 26t26 60V640q0 34-26 60L420 982 374 936Q356 918 356 892v-14l42-196H128q-34 0-60-25T42 598l2-4h-2V512q0-16 6-32l130-300q20-52 78-52h384z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)